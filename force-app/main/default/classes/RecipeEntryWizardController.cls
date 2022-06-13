public with sharing class RecipeEntryWizardController {
  public RecipeEntryWizardController() {
  }
  private static List<Kitchen_Item__c> kList = [
    SELECT Name
    FROM Kitchen_Item__c
  ];
  private static List<Measure__c> mList = [
    SELECT Name, Abbreviation__c
    FROM Measure__c
  ];

  @AuraEnabled
  public static OutputWrapper parseIngredientInput(String ingredientInput) {
    try {
      OutputWrapper o;
      //split ingredientInput into words
      List<String> iList = ingredientInput.split(' ');
      //remove 'of' from first three strings
      for (Integer i = 0; i < iList.size(); i++) {
        //if iList is 3 words and contains "of", it should match the pattern "_measure_ of _item_", parse accordingly
        if (i < 3 && iList[i].equalsIgnoreCase('of')) {
          iList.remove(i);
        } else if (i >= 3) {
          break;
        }
      }
      //parse iList as follows:
      // if 1 word --> parseItem
      // if 2 words --> parseQtyItem or parseMeasureItem
      // if 3+ words --> parseQtyMeasureItem
      // TODO: handle following cases:
      //   1 quarter cup of salt
      //   1 milk of cow
      if (iList.size() == 1) {
        return parseItem(iList);
      } else if (iList.size() == 2) {
        try {
          return parseQuantityItem(iList);
        } catch (exception ex) {
          system.debug('Error on parseQuantityItem --> ' + ex);
          return parseMeasureItem(iList);
        }
      } else if (iList.size() >= 3) {
        return parseQtyMeasureItem(iList);
      } else {
        throw new AuraHandledException('failed to parse input');
      }
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  public class OutputWrapper {
    @AuraEnabled
    public Decimal quantity;
    @AuraEnabled
    public String measure;
    @AuraEnabled
    public String item;
    // @AuraEnabled
    // public Ingredient__c ingredient;
    public Ingredient__c getIngredient(String recipeId) {
      Ingredient__c i = new Ingredient__c(
        Item__r = this.item != null ? this.getItem() : null,
        Measure__r = this.measure != null ? this.getMeasure() : null,
        Quantity__c = this.measure != null ? this.quantity : null,
        Recipe__c = recipeId
      );
      return i;
    }
    public Measure__c getMeasure() {
      Measure__c m = new Measure__c(UniqueName__c = this.measure);
      return m;
    }
    public Kitchen_Item__c getItem() {
      Kitchen_Item__c k = new Kitchen_Item__c(UniqueName__c = this.item);
      return k;
    }
  }

  public class RecipeWrapper {
    @AuraEnabled
    public string name { get; set; }
    @AuraEnabled
    public string description { get; set; }
    @AuraEnabled
    public Integer servingSize { get; set; }

    public Recipe__c getRecipe() {
      Recipe__c p = new Recipe__c(
        name = this.name != null ? this.name : null,
        recipe_description__c = this.description != null
          ? this.description
          : null,
        serving_size__c = this.servingSize != null ? this.servingSize : null
      );
      return p;
    }
  }

  public static Boolean isAbbreviation(String measureString) {
    //if measureString ends in an abbreviation, return TRUE
    return null;
  }
  public static Decimal getDecimal(String s) {
    //if s = 'a', return 1
    //if s is a Decimal-as-String, return decimal value
    //else make words-to-numbers api call to try and return decimal
    if (s.equalsIgnoreCase('a')) {
      return 1.00;
    } else {
      try {
        return Decimal.valueOf(s);
      } catch (exception ex) {
        System.debug(
          'no decimal value, calling words-to-numbers to try and parse --> ' +
          ex
        );
        Decimal d =  WordsToNumbers.wordsToNumbers(s.toLowerCase());
        if(d != null){
          return d;
        }else{
          throw new AuraHandledException('mock wordsToNumbers fail');
        }
        // System.debug('throwing exception to mock failed wordsToNumbers call');
        // throw new AuraHandledException('mock wordsToNumbers fail');
        // System.debug('returning default value 12');
        // return 12.00;
      }
    }
  }
  public static OutputWrapper parseItem(List<String> iList) {
    OutputWrapper o = new OutputWrapper();
    o.item = iList[0];
    o.quantity = 1;
    o.measure = 'unit';
    return o;
  }
  public static OutputWrapper parseQuantityItem(List<String> iList) {
    OutputWrapper o = new OutputWrapper();
    o.quantity = getDecimal(iList[0]);
    o.item = iList[1];
    o.measure = 'unit';
    return o;
  }
  public static OutputWrapper parseQtyMeasureItem(List<String> iList) {
    OutputWrapper o = new OutputWrapper();
    o.quantity = getDecimal(iList[0]);
    o.measure = iList[1];
    List<String> tempIList = (List<String>) slice(iList, 2, iList.size());
    o.item = String.join(tempIList, ' ');
    return o;
  }
  //if iList is 3 words and contains "of", it should match the pattern "_measure_ of _item_", parse accordingly. assume quantity is 1
  public static OutputWrapper parseMeasureItem(List<String> iList) {
    OutputWrapper o = new OutputWrapper();
    o.measure = iList[0];
    o.item = iList[1];
    o.quantity = 1;
    return o;
  }
  public static List<Object> slice(List<Object> input, Integer ge, Integer l) {
    List<Object> output = input.clone();
    for (Integer i = 0; i < ge; i++)
      output.remove(0);
    Integer elements = l - ge;
    while (output.size() > elements)
      output.remove(elements);
    return output;
  }
  //pass recipe details and OutputWrapper rows, insert recipe, insert associated parent records to ingredients (item, measure), insert associated ingredients
  @AuraEnabled  
  public static Recipe__c insertRecipe(RecipeWrapper rW, String oListString) {
    List<OutputWrapper> oList = (List<OutputWrapper>) JSON.deserialize(oListString, List<OutputWrapper>.class);
    system.debug(rw);
    system.debug(olist);
    try{
      Recipe__c r = rW.getRecipe();
      insert r;
      Map<String, Measure__c> mMap = New Map<String, Measure__c>();
      Map<String, Kitchen_Item__c> kMap = New Map<String, Kitchen_Item__c>();
      List<Ingredient__c> iList = New List<Ingredient__c>();

      for(OutputWrapper o : oList){
        mMap.put(o.measure.toLowerCase(), o.getMeasure());
        kMap.put(o.item.toLowerCase(), o.getItem());
        iList.add(o.getIngredient(r.Id));
      }
      upsert mMap.values() uniqueName__c;
      upsert kMap.values() uniqueName__c;
      insert iList;
      return r;
    }catch (Exception ex){
      system.debug('failed insertRecipe --> '  + ex);
      throw new AuraHandledException('failed insertRecipe --> '  + ex);
    }
  }

  public static Recipe__c createRecipe(
    String name,
    String description,
    Integer servingSize
  ) {
    Recipe__c p = new Recipe__c(
      name = name != null ? name : null,
      recipe_description__c = description != null ? description : null,
      serving_size__c = servingSize != null ? servingSize : null
    );
    return p;
  }
}
