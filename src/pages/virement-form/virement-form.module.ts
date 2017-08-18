import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirementFormPage } from './virement-form';

@NgModule({
  declarations: [
    VirementFormPage,
  ],
  imports: [
    IonicPageModule.forChild(VirementFormPage),
  ],
})
export class VirementFormPageModule {}
