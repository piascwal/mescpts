import { OperationsPage } from './../operations/operations';
import { SynthesePage } from './../synthese/synthese';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

synthese: any;
operations: any;

  constructor(public navCtrl: NavController) {
    this.synthese = SynthesePage;
    this.operations = OperationsPage;
  }

}
