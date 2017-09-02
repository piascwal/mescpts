import { OperationServiceProvider } from './../../providers/operation-service/operation-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SynthesePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-synthese',
  templateUrl: 'synthese.html',
})
export class SynthesePage {

  somme =0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
     operationService.getSomme().subscribe(res => this.somme= res);
    this.events.subscribe('updateOperation', () => {
        operationService.getSomme().subscribe(res => this.somme= res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SynthesePage');
  }

   cleanData(){
    localStorage.clear();
     this.events.publish('updateOperation');
  }

}
