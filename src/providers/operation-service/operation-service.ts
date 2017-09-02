
import { Operation } from './../../app/model/operation.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


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

  saveOperation(operation: Operation) {


    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    if (operationsList != null) {
      operationsList.push(operation);
      localStorage.setItem("operations", JSON.stringify(operationsList));
    } else {
      let opList: Array<Operation> = [operation];
      localStorage.setItem("operations", JSON.stringify(opList));
    }

  }

  saveAll(operations: Operation[]) {
    operations.forEach(operation => console.log(operation.isComptabilise));
    localStorage.setItem("operations", JSON.stringify(operations));
  }

  deleteOperation(id: number) {
    return new Observable(observable => {
      let itemDeleted;
      let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
      if (id != null && operationsList != null) {
        let index = 0;
        operationsList.forEach(operation => {
          if (operation.id == id) {
            console.log("on supprime");
            itemDeleted = operationsList.splice(index, 1);
            console.log(itemDeleted);
          }
          index++;
        });
        localStorage.setItem("operations", JSON.stringify(operationsList));
        observable.next(itemDeleted);
      }
    });

  }

  updateOperation(operation: Operation) {
    return new Observable(observable => {
      let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
      if (operation != null && operationsList != null) {
        let index = 0;
        operationsList.forEach(op => {
          if (operation.id == op.id) {      
             operationsList[index]= operation;
          }
          index++;
        });
        localStorage.setItem("operations", JSON.stringify(operationsList));
        observable.next();
      }

    });
  }

  getOperation(id: number) {
    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    return operationsList[id];
  }

  getVirements(): Array<Operation> {
    return this.getOperationsByType("VIREMENT");
  }

  getPrelevements(): Array<Operation> {
    return this.getOperationsByType("PRELEVEMENT");
  }

  getOperationsByType(type: string): Array<Operation> {
    let returnedList = Array<Operation>();
    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    if (operationsList != null) {
      operationsList.forEach(operation => {
        if (operation.typePaiement == type) {
          returnedList.push(operation);
        }
      }
      )
    }
    return returnedList;
  }

  getOperations(): Operation[] {
    let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
    return operationsList;
  }

  getSomme(): Observable<number> {
    return new Observable(observable => {
      let somme = 0.0;
      let operationsList: Operation[] = JSON.parse(localStorage.getItem("operations"));
      if (operationsList != null) {
        operationsList.forEach(operation => {
          if (operation != null) {
            let montantNumber = Number(operation.montant);
            if (operation.isDebit) {
              somme -= montantNumber;
            } else {
              somme += montantNumber;
            }
          }
        });
      }
      observable.next(somme);
    })

  }

}
