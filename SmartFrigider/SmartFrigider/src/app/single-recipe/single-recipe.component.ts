import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'app/models/recipe.model';
import {Product} from '../models/product.model' 
import {DataManagerService} from  '../services/DataService';
@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe:Recipe;
  id;
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) {
    route.params.subscribe(params => { this.id = params['id']; });
  
  }
   ngOnInit() {
     this.recipe= this.DataService.getRecipe(this.id)
     console.log(this.recipe.Name);
     
  }

  OnBackClicked()
  {
    console.log("a");
    this.router.navigate(['../Recipes']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }

}
