import { OperationFormPage } from './../operation-form/operation-form';
import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Operation } from './../../app/model/operation.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage implements OnInit  {

  isReady = false;
  operations: Operation[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public operationService: OperationServiceProvider,  public events: Events) {
     this.initiOperations();
     this.events.subscribe('updateOperation', () => {
       this.initiOperations();
    });
       
  }

  initiOperations() {
  
    this.operations = this.operationService.getOperations();
    if(this.operations == null){
      this.operations = [];
    }
  }




   ngOnInit(): void {
 

  }
  
  ionViewDidLoad() {
  }

   moveToCreation() {
    this.navCtrl.push(OperationFormPage);
  }

  saveAll() {
    this.operationService.saveAll(this.operations);
  }

  openOperation(operation: Operation) {
    this.navCtrl.push(OperationFormPage,{operation: operation});
  }

    deleteOperation(id: number) {
    this.operationService.deleteOperation(id).subscribe(itemDeleted => {
      console.log(itemDeleted);
      this.events.publish('updateOperation')
    });

  }



}
