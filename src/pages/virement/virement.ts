import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { VirementFormPage } from './../virement-form/virement-form';
import { Operation } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-virement',
  templateUrl: 'virement.html',
})
export class VirementPage {

  virementList= new Array<Operation>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
    this.virementList= this.operationService.getVirements();
    this.events.subscribe('updateVirement', () => {
      this.virementList= this.operationService.getVirements();
    });
  }

  ionViewDidLoad() {
   
  }



  moveToCreation() {
    this.navCtrl.push(VirementFormPage);
  }

}
