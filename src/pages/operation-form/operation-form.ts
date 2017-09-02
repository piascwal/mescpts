import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-operation-form',
  templateUrl: 'operation-form.html',
})
export class OperationFormPage {

  datePickerValue: string = new Date().toISOString();
  operation: Operation;
  typePay = ["CHEQUE", "CB", "RETRAIT"];
  isCreation = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider, public events: Events) {
    this.operation = this.navParams.get('operation');
    if (this.operation == null) {
      this.operation = new Operation();
    } else {
      this.isCreation = false;
    }
  }

  ionViewDidLoad() {

  }

  submitForm() {
    this.operation.dateSaisie = new Date(this.datePickerValue);
    this.operation.isDebit = true;
    this.operation.isComptabilise = false;
    if (this.isCreation) {
      this.operationService.saveOperation(this.operation);
    } else {
      this.operationService.updateOperation(this.operation).subscribe();
    }
    this.events.publish('updateOperation');
    this.navCtrl.pop();
  }


}
