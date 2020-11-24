export class Product {
    productName:string;
    unit:string;
    Amount: number;
    constructor(product: any) {
      this.productName=product.productName;
      this.unit=product.unit;
      this.Amount=product.Amount;
     }
     
     PrintProduct()
     {
        console.log("productName: "+this.productName)
        console.log("Amount: "+ this.Amount);
        console.log("unit: "+ this.unit.toString());
     }
     ToString()
     {
      return this.productName+" "+this.Amount+" "+this.unit;

     }
  }
  