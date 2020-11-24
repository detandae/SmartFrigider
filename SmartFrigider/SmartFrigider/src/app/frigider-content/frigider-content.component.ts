import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Product} from '../models/product.model' 
import {DataManagerService} from  '../services/DataService';

@Component({
  selector: 'app-frigider-content',
  templateUrl: './frigider-content.component.html',
  styleUrls: ['./frigider-content.component.css']
})
export class FrigiderContentComponent implements OnInit {

  FrigiderContent:Product[]=[];
  elementClicked = 'Click any of the list item below';
  class="list-group-item list-group-item-secondary";
  classSelected="list-group-item active";
  currentproductName="";

 
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) {
    console.log(this.FrigiderContent.length);
    let product={
      productName:"Example",
      Amount:2,
      Unit:"kg"
    };
    let p=new Product(product);
    this.DataService.AddProductToFrigider(p);
    this.FrigiderContent=this.DataService.FrigiderContent;
   }

  ngOnInit() {
  }

  onClick(e) {
    this.elementClicked = 'You clicked: ' + e.target.innerHTML;
  }

  OnProductClicked(product)
  { 
    console.log(product.productName);
   // this.DataService.RemoveProductFromFrigiderByName(product.productName)
   this.currentproductName=product.productName;
  }
  OnBackClicked()
  {
    this.router.navigate(['../FrigiderMain']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  DeleteProductClicked()
  {
    console.log("a");
    console.log(this.currentproductName);
     this.DataService.RemoveProductFromFrigiderByName(this.currentproductName);
     this.FrigiderContent=this.DataService.FrigiderContent;
  }

}
