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

  somme: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public operationService: OperationServiceProvider,  public events: Events) {
    this.somme = operationService.getSomme();
    this.events.subscribe('updateOperation', () => {
        this.somme = operationService.getSomme();
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
