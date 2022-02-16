import { LightningElement, wire, track } from 'lwc';
import todaySold from '@salesforce/apex/Tickets.getDetails';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Contact', fieldName: 'Contact__c' },
    { label: 'Regular', fieldName: 'Regular__c' },
    { label: 'Student', fieldName: 'Student__c' },
    { label: 'Foreigner', fieldName: 'Foreigner__c' },
    { label: 'Total Amount', fieldName: 'Total__c' },

    
];
export default class Sample extends LightningElement {
  // reactive variable
  @track data;
  @track columns = columns;

  // non-reactive variables
  refreshTable;
  error;

  // retrieving the data using wire service
  @wire(todaySold)
  sold(result) {
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