public with sharing class RecipeStepTriggerHandler {
  public RecipeStepTriggerHandler() {
  }
  public static void beforeInsertHandler(List<Recipe_Step__c> triggerNew) {
  }
  public static void beforeUpdateHandler(
    Map<Id, Recipe_Step__c> triggerOldMap,
    Map<Id, Recipe_Step__c> triggerNewMap
  ) {
    RecipeStepUtils.relateCookingActions(
      getSummaryStepChangedList(triggerOldMap, triggerNewMap)
    );
  }
  public static void afterInsertHandler(List<Recipe_Step__c> triggerNew) {
    RecipeStepUtils.relateCookingActions(triggerNew);
  }

  //compare Summary_Step__c field and return list of records with changed values
  public static List<Recipe_Step__c> getSummaryStepChangedList(
    Map<Id, Recipe_Step__c> triggerOldMap,
    Map<Id, Recipe_Step__c> triggerNewMap
  ) {
    List<Recipe_Step__c> rList = new List<Recipe_Step__c>();
    for (Id key : triggerNewMap.keySet()) {
      if (
        triggerNewMap.get(key).Step_Summary__c !=
        triggerOldMap.get(key).Step_Summary__c
      ) {
        rList.add(triggerNewMap.get(key));
      }
    }
    return rList;
  }
}
