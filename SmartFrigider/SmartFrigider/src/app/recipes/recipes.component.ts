import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Product} from '../models/product.model' 
import {DataManagerService} from  '../services/DataService';
import {Filter} from '../models/Filter' 
import {Recipe} from '../models/recipe.model' 
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public Recipes:Recipe[]=[]
  SearchClicked:boolean=false;
  NoResult:boolean=false;
  Search:string;
  constructor(private route: ActivatedRoute,private  router: Router,private DataService:DataManagerService) {
    this.Recipes=this.DataService.RecipesList;

  }

 OnBackClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  OnFilterClicked()
  {
    this.router.navigate(['../Filter']);
  }
  OnSearchClicked()
  {
    this.Recipes= this.DataService.GetFilteredRecipeList(this.Search);
    if(this.Recipes.length<1){this.NoResult=true;}
    this.SearchClicked=true;
  }
  onRecipeClick(recipe)
  {
    console.log(recipe.Name);
    this.router.navigate( ['/SingleRecipe', recipe.id]);
   
    
  }
  OnSuggestClicked()
  {
    console.log("On suggest clicked");
  }
  ngOnInit() {
  }

}
