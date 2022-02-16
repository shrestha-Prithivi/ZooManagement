trigger totalAmount on NewTicket__C (before insert) {
	
   
     for (NewTicket__c newt: trigger.new){
         
        newt.TotalVisitors__c = newt.Foreigner__c + newt.Student__c + newt.Regular__c;
      }
       
   
    
}