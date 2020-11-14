import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrigiderContentComponent } from './frigider-content/frigider-content.component';
import { FrigiderAddContentComponent } from './frigider-add-content/frigider-add-content.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FrigiderContentComponent,
    FrigiderAddContentComponent,
    RecipesComponent,
    ShoppingListComponent,
    SingleRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
