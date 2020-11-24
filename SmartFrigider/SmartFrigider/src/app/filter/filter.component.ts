import { Component, OnInit } from '@angular/core';
import {DataManagerService} from  '../services/DataService';
import {Router, ActivatedRoute } from '@angular/router';
import {Product} from '../models/product.model' 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  productName:string="";
  minPrice=0;
  maxPrice=0;
  minTime=0;
  maxTime=0;
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) { 
  }

  ngOnInit() {
  }
  minPriceChanged()
  {

  }
  maxPriceChanged()
  {

  }
  minTimeChanged()
  {

  }
  maxTimeChanged()
  {

  }

  OnBackClicked()
  {
    this.router.navigate(['../Recipes']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }

  OnAddClicked()
  {
this.DataService.Filter.maxPrice=this.maxPrice;
this.DataService.Filter.minPrice=this.minPrice;
this.DataService.Filter.minTime=this.minTime;
this.DataService.Filter.maxTime=this.maxTime;
this.DataService.Filter.productName=this.productName;
this.router.navigate(['../Recipes'])
  }

}
