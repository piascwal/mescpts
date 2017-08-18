import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrelevementFormPage } from './prelevement-form';

@NgModule({
  declarations: [
    PrelevementFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PrelevementFormPage),
  ],
})
export class PrelevementFormPageModule {}
