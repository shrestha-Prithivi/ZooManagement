import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import UserNameFld from '@salesforce/schema/User.Name';


export default class Header extends LightningElement {
    userId = Id;
    currentUserName;
    error;

    @wire(getRecord, { recordId: Id, fields: [UserNameFld ]}) 
    userDetails({error, data}) {
        if (data) {
            this.currentUserName = data.fields.Name.value;
        } else if (error) {
            this.error = error ;
        }
    }
}