export enum TypePaiement {
    CHEQUE,
    CB,
    RETRAIT,
    PRELEVEMENT,
    VIREMENT,
}

export class Operation {
   static _id=0;
   public id: number;
   public lib: string;
   public dateSaisie: Date;
   public isDebit: boolean;
   public montant: number;
   public  typePaiement: TypePaiement;
   public dateValidation: Date;
   public isComptabilise;

   constructor(){
       this.id= Operation._id++;
       
   }
}