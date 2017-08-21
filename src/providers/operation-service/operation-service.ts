
import { Operation, TypePaiement } from './../../app/model/operation.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the OperationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OperationServiceProvider {

  constructor(public http: Http) {
    console.log('Hello OperationServiceProvider Provider');
  }

  saveOperation(operation: Operation){
    
   
    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    if(operationsList != null){
      operationsList.push(operation);
      localStorage.setItem("operations", JSON.stringify(operationsList));
    } else {
        let opList: Array<Operation> = [operation];
        localStorage.setItem("operations", JSON.stringify(opList));
    }

  }

  saveAll(operations: Operation[]){
    operations.forEach(operation => console.log(operation.isComptabilise));
     localStorage.setItem("operations", JSON.stringify(operations));
  }

  deleteOperation(id: number){
    

  }

  updateOperation(operation: Operation){

  }

  getOperation(id: number){

  }

    getVirements() : Array<Operation>{
      return this.getOperationsByType(TypePaiement.VIREMENT);
    }

    getPrelevements() : Array<Operation>{
      return this.getOperationsByType(TypePaiement.PRELEVEMENT);
    }

  getOperationsByType(type: TypePaiement) : Array<Operation>{
      let returnedList = Array<Operation>(); 
     let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
     if(operationsList != null){
       operationsList.forEach(operation =>
        {
          if(operation.typePaiement == type) {
            returnedList.push(operation);
          }
        }
       )
     }
    return returnedList;
  }

  getOperations(): Operation[]{
   let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
   return operationsList;
  }

  getSomme(): number {
    let somme = 0.0;
    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    if(operationsList != null){
      operationsList.forEach(operation => {
        let montantNumber = Number(operation.montant);
        if(operation.isDebit) {
          somme-= montantNumber;
        } else {
          somme+= montantNumber;
        }
      });
    }

    return somme;
  }

}
