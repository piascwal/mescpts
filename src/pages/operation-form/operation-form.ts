import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation, TypePaiement } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the OperationFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation-form',
  templateUrl: 'operation-form.html',
})
export class OperationFormPage {

  datePickerValue: string  = new Date().toISOString();
  operation= new Operation();
  typePay= ["CHEQUE","CB","RETRAIT"];
  typePaySelected;

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
  }

  ionViewDidLoad() {

  }

    submitForm(){
    this.operation.dateSaisie = new Date(this.datePickerValue);
    this.operation.isDebit = true;
     this.operation.isComptabilise = false;
    
    switch(this.typePaySelected){
      case "CHEQUE" :
        this.operation.typePaiement = TypePaiement.CHEQUE;
      case "CB":
      this.operation.typePaiement = TypePaiement.CB;
      case "RETRAIT":
      this.operation.typePaiement = TypePaiement.RETRAIT;
      default:
      this.operation.typePaiement = TypePaiement.CB;


    }
    
    this.operationService.saveOperation(this.operation);
    this.events.publish('updateOperation');
    this.navCtrl.pop();
  }


}
