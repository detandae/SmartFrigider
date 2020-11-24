import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private  router: Router) {
    document.title="Főmenü"
   }

   OnRecipesClicked()
   {
    console.log("recipes clicked");
    this.router.navigate(['../Recipes']);
   }

   FrigiderContentClicked()
   {
     console.log("frigider clicked");
    this.router.navigate(['../FrigiderMain']); 
   }

   ShoppingListClicked()
   {
    this.router.navigate(['../ShoppingList']); 
   }

  ngOnInit() {
  }

}
