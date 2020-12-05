import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'app/models/recipe.model';
import {Product} from '../models/product.model' 
import {DataManagerService} from  '../services/DataService';
import {Filter} from '../models/Filter' 
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  importedRecipe:Recipe;
  importedProducts:string[];
  filteredProducts:string[];
  plusProducts:string[]=[];
  productName:string;
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) 
  {
    this.importedRecipe=this.DataService.importedRecipe;
    this.importedProducts=this.DataService.importedRecipe.ProductList;
    this.filteredProducts=[];
   
  }

  ngOnInit() {
    for(let i=0;i<this.importedProducts.length;i++)
    {
      let toAdd=true;
      for(let k=0;k<this.DataService.FrigiderContent.length;k++)
      {
        if(this.importedProducts[i]==this.DataService.FrigiderContent[k].productName)
        {
            toAdd=false;
        }
      }
      if(toAdd==true)
      {
        this.filteredProducts.push(this.importedProducts[i]);
      }
    }
  }
  OnBackClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }

  OnFrigiderConentClicked()
  {
    this.router.navigate(['../FrigiderContent']);
  }

  AddproductClicked()
  {
    console.log("clicked");
    if(this.productName!="" && this.productName!=null)
    {
      this.plusProducts.push(this.productName);
    }
  }
}
