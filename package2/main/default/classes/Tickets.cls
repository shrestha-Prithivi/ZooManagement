public inherited sharing class Tickets {

    @AuraEnabled(Cacheable = true)
    public static List<NewTicket__c> getDetails(){
        return [SELECT  Name,Contact__c,Regular__c,Student__c,Foreigner__c,Total__c FROM NewTicket__c WHERE CreatedDate>YESTERDAY ];
        
    }
    
   
}