import { Injectable } from '@angular/core';
import {Product} from '../models/product.model' 
import {Filter} from '../models/Filter' 
import {Recipe} from '../models/recipe.model' 

@Injectable()
export class DataManagerService {

   public  FrigiderContent:Product[]=[];
    public Filter:Filter=new Filter();
    public RecipesList:Recipe[]=[];

    constructor()
    {
        let recipe1=new Recipe();
        recipe1.id=1;
        recipe1.Name="Example";
        recipe1.Price=1200;
        recipe1.Time=60;
        recipe1.ProductList=["example1","example2"];
        recipe1.Steps.push("First Step;");
        recipe1.Steps.push("Secound Step which is muuuuuuuuuuuuuuuuuuch longer");
        recipe1.Steps.push("Third Step;")

        let recipe2=new Recipe();
        recipe1.id=2;
        recipe2.Name="Example2";
        recipe2.Price=600;
        recipe2.Time=60;
        recipe2.ProductList=["example3","example4"];
        recipe2.Steps.push("First Step;");
        recipe2.Steps.push("Secound Step which is muuuuuuuuuuuuuuuuuuch longer");
        recipe2.Steps.push("Third Step;")

        this.RecipesList.push(recipe1);
        this.RecipesList.push(recipe2);

    }

    getRecipe(id):Recipe
    {
        for(let i=0;i<this.RecipesList.length;i++)
        {
            if(this.RecipesList[i].id==id)
            {
                return (this.RecipesList[i]);
            }
        }
    }

    GetFilteredRecipeList(search:string):Recipe[]
    {
        console.log("filter: ");
        console.log(this.Filter.productName);
        console.log(this.Filter.minPrice);
        console.log(this.Filter.maxPrice);
        console.log(this.Filter.minTime);
        console.log(this.Filter.maxTime);
        let FilteredList1:Recipe[]=[];
        if(this.Filter.minTime<this.Filter.maxTime)
        {
            for(let i=0;i<this.RecipesList.length;i++)
            {
                if(this.RecipesList[i].Time>this.Filter.minTime && this.RecipesList[i].Time<this.Filter.minPrice)
                {
                    FilteredList1.push(this.RecipesList[i]);
                }
            }
        }
        else{
            FilteredList1=this.RecipesList;
        }
        console.log("filter 1: "+FilteredList1.length);
        let FilteredList2:Recipe[]=[];
        if(this.Filter.minPrice<this.Filter.maxPrice)
        {
            for(let i=0;i<FilteredList1.length;i++)
            {
                if(FilteredList1[i].Price>this.Filter.minPrice && FilteredList1[i].Price<this.Filter.maxPrice)
                {
                    FilteredList2.push(this.RecipesList[i]);
                }
            }
        }
        else{
            FilteredList2=FilteredList1;
        }
        console.log("filter 2: "+FilteredList2.length)
        let FilteredList3:Recipe[]=[];
        if(this.Filter.productName!="" && this.Filter.productName!=null)
        {
            for(let i=0;i<FilteredList2.length;i++)
            {
                if(FilteredList2[i].ProductList.includes(this.Filter.productName))
                {
                    FilteredList3.push(this.RecipesList[i]);
                }
            }
        }
        else{
            FilteredList3=FilteredList2;
        }
        console.log("filter 2: "+FilteredList3.length)

        let FilteredList4:Recipe[]=[];
        if(search!="" && search!=null)
        {
            console.log("ok");
            for(let i=0;i<FilteredList3.length;i++)
            {
                if(FilteredList3[i].Name==search)
                {
                    FilteredList4.push(FilteredList3[i]);
                }
            }
            return FilteredList4;
        }
        return FilteredList3;
    }


    AddProductToFrigider(p:Product)
    {
        for(let i=0;i<this.FrigiderContent.length;i++)
        {
            if(this.FrigiderContent[i].productName==p.productName&& this.FrigiderContent[i].unit==p.unit)
            {
                this.FrigiderContent[i].Amount+=p.Amount;
                return;
            }
        }
        this.FrigiderContent.push(p);
        console.log(this.FrigiderContent.length);

    }
    RemoveProductFromFrigider(p:Product)
    {
        for(let i=0;i<this.FrigiderContent.length;i++)
        {
            if(this.FrigiderContent[i].productName==p.productName&& this.FrigiderContent[i].unit==p.unit)
            {
                this.FrigiderContent[i].Amount-=p.Amount;
                if(this.FrigiderContent[i].Amount<=0)
                {
                    this.FrigiderContent.splice(i, 1);
                    return;
                }
            }
        }
    }
    
    RemoveProductFromFrigiderByName(productName:string)
    {
        for(let i=0;i<this.FrigiderContent.length;i++)
        {
            if(this.FrigiderContent[i].productName==productName)
            {
                console.log(productName)
            this.FrigiderContent.splice(i, 1);
                return;
            }
        }
    }


}