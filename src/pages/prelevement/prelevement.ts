import { PrelevementFormPage } from './../prelevement-form/prelevement-form';
import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation } from './../../app/model/operation.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-prelevement',
  templateUrl: 'prelevement.html',
})
export class PrelevementPage {
   prelevementList= new Array<Operation>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
    this.prelevementList= this.operationService.getPrelevements();
    this.events.subscribe('updatePrelevement', () => {
      this.prelevementList= this.operationService.getPrelevements();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrelevementPage');
  }



  moveToCreation() {
    this.navCtrl.push(PrelevementFormPage);
  }

}
