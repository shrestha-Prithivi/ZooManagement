public inherited sharing class AnimalDetail {

    @AuraEnabled(Cacheable = true)
    public static List<Animal__c> getDetails(){
        return [SELECT  Name,AnimalName__c,BirthDate__c,Age__c,CageNumber__c,FoodType__c, Sex__c, Class__c FROM Animal__c where IsAvailable__c=:true ];
        
    }
    
    
}