import { Component, OnInit } from '@angular/core';
import {DataManagerService} from  '../services/DataService';
import {Router, ActivatedRoute } from '@angular/router';
import {Product} from '../models/product.model' 

interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-frigider-add-content',
  templateUrl: './frigider-add-content.component.html',
  styleUrls: ['./frigider-add-content.component.css']
})
export class FrigiderAddContentComponent implements OnInit {

  productName:string;
  Amount:number;
  unit:string="kg";
  FormWarning:boolean=false;
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) { 
  }
  productNameChanged()
  {
  }
  OnButtonAddclicked()
  {
    if(this.productName!="" && this.Amount>0)
    { this.FormWarning=false;
      console.log(this.productName);
      console.log(this.unit);
      console.log(this.Amount);
      let product=
      {
        productName:this.productName,
        unit:this.unit,
        Amount:this.Amount
      }
      let p=new Product(product);
      this.DataService.AddProductToFrigider(p);
    }
    else
    {
      this.FormWarning=true;
    }
  }

  getUnit(unit)
  {
    console.log(unit);
  }

  OnBackClicked()
  {
    this.router.navigate(['../FrigiderMain']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }

  ngOnInit() {
  }

}
