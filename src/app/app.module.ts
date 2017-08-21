import { OperationFormPage } from './../pages/operation-form/operation-form';

import { VirementFormPage } from './../pages/virement-form/virement-form';
import { PrelevementFormPage } from './../pages/prelevement-form/prelevement-form';

import { PrelevementPage } from './../pages/prelevement/prelevement';
import { VirementPage } from './../pages/virement/virement';
import { SynthesePageModule } from './../pages/synthese/synthese.module';
import { OperationsPageModule } from './../pages/operations/operations.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OperationServiceProvider } from '../providers/operation-service/operation-service';
import { Facebook } from '@ionic-native/facebook';
import { LoginPage } from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VirementPage, 
    PrelevementPage,
    PrelevementFormPage,
    VirementFormPage,
    OperationFormPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SynthesePageModule, 
    OperationsPageModule,
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VirementPage,
    PrelevementPage,
    PrelevementFormPage,
    VirementFormPage,
    OperationFormPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OperationServiceProvider,
    Facebook
  ]
})
export class AppModule {}
