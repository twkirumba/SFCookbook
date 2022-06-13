public with sharing class RecipeStepUtils {
  public RecipeStepUtils() {
  }

  //parse recipe step text, identify related cooking actions and create junction object as needed.
  @InvocableMethod
  public static void relateCookingActions(List<Recipe_Step__c> rList) {
    Map<String, Cooking_Action__c> cMap = getAllCookingActions();

    Map<Id, List<Cooking_Action_on_Recipe_Step__c>> carsMap = getCarsMap(rList);

    createCars(rList, cMap, carsMap);
  }

    //Get Map of all Cooking Actions
  public static Map<String, Cooking_Action__c> getAllCookingActions() {
    List<Cooking_Action__c> cList = [SELECT Id, Name FROM Cooking_Action__c];
    Map<String, Cooking_Action__c> cMap = new Map<String, Cooking_Action__c>();
    for (Cooking_Action__c c : cList) {
      cMap.put(c.Name.toLowerCase(), c);
    }
    return cMap;
  }

    //Get Map of Existing Cooking Action on Recipe Step records
  public static Map<Id, List<Cooking_Action_on_Recipe_Step__c>> getCarsMap(
    List<Recipe_Step__c> rList
  ) {
    List<Cooking_Action_on_Recipe_Step__c> carsList = [
      SELECT Id, Cooking_Action__r.Name, Recipe_Step__c
      FROM Cooking_Action_on_Recipe_Step__c
      WHERE Recipe_Step__c IN :rList
    ];
    Map<Id, List<Cooking_Action_on_Recipe_Step__c>> carsMap = new Map<Id, List<Cooking_Action_on_Recipe_Step__c>>();
    for (Recipe_Step__c r : rList) {
      carsMap.put(r.Id, new List<Cooking_Action_on_Recipe_Step__c>());
    }
    for (Cooking_Action_on_Recipe_Step__c cars : carsList) {
      carsMap.get(cars.Recipe_Step__c).add(cars);
    }
    return carsMap;
  }

  //Create Cooking Action on Recipe Step Records as needed
  public static void createCars(
    List<Recipe_Step__c> rList,
    Map<String, Cooking_Action__c> cMap,
    Map<Id, List<Cooking_Action_on_Recipe_Step__c>> carsMap
  ) {
    List<String> cookingActions = new List<String>();
    List<String> stepSummaryParse = new List<String>();
    Map<String, Cooking_Action__c> matchCMap = new Map<String, Cooking_Action__c>();
    List<Cooking_Action_on_Recipe_Step__c> insertCARSList = new List<Cooking_Action_on_Recipe_Step__c>();

    for (Recipe_Step__c r : rList) {
      System.debug(r);
      //parse step summary into words
      stepSummaryParse = r.Step_Summary__c.remove('.').remove(',').split(' ');
      //check if any of those words match a cooking action
      for (String s : stepSummaryParse) {
        s = s.trim().toLowerCase();
        if (cMap.get(s) != null) {
          matchCMap.put(s, cMap.get(s));
        }
      }
      //check if matching cooking actions have a junction record and remove from matchList
      for (Cooking_Action_on_Recipe_Step__c c : carsMap.get(r.Id)) {
        matchCMap.remove(c.Cooking_Action__r.Name);
      }
      //if no match, create a junction record.
      for (String key : matchCMap.keySet()) {
        Cooking_Action_on_Recipe_Step__c newCARS = new Cooking_Action_on_Recipe_Step__c(
          Cooking_Action__c = matchCMap.get(key).Id,
          Recipe_Step__c = r.Id
        );
        insertCARSList.add(newCARS);
      }
      //clear stepSummaryParse, temp and cookingActions
      stepSummaryParse.clear();
      cookingActions.clear();
      matchCMap.clear();
    }

    doInsertCARSList(insertCARSList);
  }
  
  //insert records to database and debug errors
  public static void doInsertCARSList(List<Cooking_Action_on_Recipe_Step__c> insertCARSList){
      List<Database.SaveResult> srList = Database.insert(insertCARSList, false);
    for (Database.SaveResult sr : srList) {
      if (sr.isSuccess() == false) {
        System.debug(sr.getErrors());
      }
    }
  }
}
