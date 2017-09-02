import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the VirementFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virement-form',
  templateUrl: 'virement-form.html',
})
export class VirementFormPage {

  datePickerValue: string  = new Date().toISOString();
  virement = new Operation();


  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
  }

  ionViewDidLoad() {

  }

    submitForm(){
    this.virement.dateSaisie = new Date(this.datePickerValue);
    this.virement.isDebit = false;
    this.virement.isComptabilise = false;
    this.virement.typePaiement = "VIREMENT";
    this.operationService.saveOperation(this.virement);
    this.events.publish('updateVirement');
    this.navCtrl.pop();
  }
}
