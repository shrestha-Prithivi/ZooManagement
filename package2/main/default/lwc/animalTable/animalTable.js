import {LightningElement, track, wire} from 'lwc';

// importing apex class methods
import getAnimals from '@salesforce/apex/AnimalDetail.getDetails';

const columns = [
    {
        label: 'Animal Id',
        fieldName: 'Name'
    }, {
        label: 'Animal name',
        fieldName: 'AnimalName__c',
        editable: true
    }, {
        label: 'Age',
        fieldName: 'Age__c',
        
    }, {
        label: 'BirthDate',
        fieldName: 'BirthDate__c',
        editable: true
    },{
        label: 'Cage Number',
        fieldName: 'CageNumber__c',
        editable: true
    },{
        label: 'Food Type',
        fieldName: 'FoodType__c',
        editable: true
    },{
        label: 'Sex',
        fieldName: 'Sex__c',
        editable: true
    },
    


];

export default class DeleteRowsInDatatableLWC extends LightningElement {
    // reactive variable
    @track data;
    @track columns = columns;
    @track buttonLabel = 'Delete Selected Rows';
    @track isTrue = false;
    @track recordsCount = 0;

    // non-reactive variables
    selectedRecords = [];
    refreshTable;
    error;

    // retrieving the data using wire service
    @wire(getAnimals)
    contacts(result) {
        this.refreshTable = result;
        if (result.data) {
            this.data = result.data;
            this.error = undefined;

        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }

}