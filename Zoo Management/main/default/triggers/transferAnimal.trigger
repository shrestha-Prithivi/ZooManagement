trigger transferAnimal on Animal__c (before delete) {

    for(Animal__C animal : trigger.new){
        if(animal.ISAvailable__c == true){
            animal.adderror('This record Cannot be deleted');
        }
        
    }

}