import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrigiderContentComponent } from './frigider-content/frigider-content.component';
import { FrigiderAddContentComponent } from './frigider-add-content/frigider-add-content.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FrigiderMainComponent } from './frigider-main/frigider-main.component';

import {DataManagerService} from './services/DataService';
import { FilterComponent } from './filter/filter.component';
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'MainPage', pathMatch: 'full' },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'FrigiderContent', component: FrigiderContentComponent },
  { path: 'FrigiderAddContent', component: FrigiderAddContentComponent },
  { path: 'SingleRecipe/:id', component: SingleRecipeComponent },
  { path: 'Recipes', component: RecipesComponent },
  { path: 'ShoppingList', component: ShoppingListComponent },
  { path: 'FrigiderMain', component: FrigiderMainComponent },
  { path: 'Filter', component: FilterComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FrigiderContentComponent,
    FrigiderAddContentComponent,
    RecipesComponent,
    ShoppingListComponent,
    SingleRecipeComponent,
    FrigiderMainComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    RouterModule.forRoot(routes),
  ],
  providers: [ DataManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
