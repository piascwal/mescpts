export class Operation {

   public id: number;
   public lib: string;
   public dateSaisie: Date;
   public isDebit: boolean;
   public montant: number;
   public  typePaiement: string;
   public dateValidation: Date;
   public isComptabilise;

   constructor(){
        let maxId = JSON.parse(localStorage.getItem("MAX_ID"));
        console.log(" get max ID:" +maxId);
       if(maxId == null){
        this.id = 0;
       } else {
           this.id = maxId+1;
       }
       console.log("set max ID:" + this.id);
       localStorage.setItem("MAX_ID", JSON.stringify(this.id) );
      
       
   }
}