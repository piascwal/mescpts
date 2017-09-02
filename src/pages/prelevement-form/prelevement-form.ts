import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-prelevement-form',
  templateUrl: 'prelevement-form.html',
})
export class PrelevementFormPage {

  datePickerValue: string  = new Date().toISOString();
  prelevement= new Operation();


  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
  }

  ionViewDidLoad() {

  }

    submitForm(){
    this.prelevement.dateSaisie = new Date(this.datePickerValue);
    this.prelevement.isDebit = true;
    this.prelevement.isComptabilise = false;
    this.prelevement.typePaiement = "PRELEVEMENT";
    this.operationService.saveOperation(this.prelevement);
    this.events.publish('updatePrelevement');
    this.navCtrl.pop();
  }

}
