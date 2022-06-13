trigger RecipeStepTrigger on Recipe_Step__c (before insert, before update, after insert) {

    if(trigger.isBefore && trigger.isInsert){
        RecipeStepTriggerHandler.beforeInsertHandler(trigger.new);
    }
    if(trigger.isBefore && trigger.isUpdate){
        RecipeStepTriggerHandler.beforeUpdateHandler(trigger.oldMap, trigger.newMap);
    }
    if(trigger.isAfter && trigger.isInsert){
        RecipeStepTriggerHandler.afterInsertHandler(trigger.new);
    }
}