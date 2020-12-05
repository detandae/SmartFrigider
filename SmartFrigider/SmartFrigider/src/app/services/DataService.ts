import { Injectable } from '@angular/core';
import {Product} from '../models/product.model' 
import {Filter} from '../models/Filter' 
import {Recipe} from '../models/recipe.model' 

@Injectable()
export class DataManagerService {

    public  FrigiderContent:Product[]=[];
    public Filter:Filter=new Filter();
    public RecipesList:Recipe[]=[];
    public importedRecipe:Recipe;   
    constructor()
    {

        this.importedRecipe=new Recipe();

        let recipe1=new Recipe();
        recipe1.id=1;
        recipe1.Name="Arany Galuska";
        recipe1.Price=3000;
        recipe1.Time=90;
        recipe1.ProductList=["50 dkg finomliszt","2 dkg friss élesztő","7 dkg vaj","3 dl tej","1 púpozott ek cukor","2 db tojássárgája","1 ek vaj (a forma kikenéséhez)"];
        recipe1.Steps.push("A szobahőmérsékletű lisztet tálba szitáljuk.");
        recipe1.Steps.push("A tejet meglangyosítjuk, elmorzsoljuk benne az élesztőt, hozzáadjuk a cukrot, és felfuttatjuk.");
        recipe1.Steps.push("A vajat megolvasztjuk, a tojássárgákkal és a felfuttatott élesztővel együtt a liszthez adjuk, és kemény munkával hólyagosra gyúrjuk. Tetejét meglisztezzük, letakarjuk, és duplájára kelesztjük.")
        recipe1.Steps.push("Ha kész, ujjnyi vastagra nyújtjuk, és picipogácsaszaggatóval kiszaggatjuk.");
        recipe1.Steps.push("Egy kapcsos tortaformát vastagon kivajazunk, a vajat megolvasztjuk, a diót és a cukrot kikeverjük.");
        recipe1.Steps.push("Fogjuk a pogácsákat, beleforgatjuk az olvasztott vajba, meghempergetjük a cukros dióban, és a formába sorakoztatjuk őket.");
        recipe1.Steps.push("Ha az egész kész, előmelegített sütőbe toljuk letakarva (a dió könnyen odakap).");
        recipe1.Steps.push("Amíg sül, elkészítjük a sodót: A tejet a vaníliarúd kikapart magjával felforraljuk, majd levesszük a tűzről.");
        recipe1.Steps.push("Egy másik lábosban kikeverjük a tojássárgákat a cukorral és a liszttel.");
        recipe1.Steps.push("Apránként hozzáadva a vaníliás tejet, kis lángon sűrűre főzzük (nem nagyon sűrűre, nem puding!).");
        recipe1.Steps.push("Megvárjuk, míg a kész aranygaluska is hűl egy kicsit, majd széttépjük (nem vágjuk), és nyakon öntjük a sodóval.");
       
        let recipe2=new Recipe();
        recipe2.id=2;
        recipe2.Name="Brassói";
        recipe2.Price=1800;
        recipe2.Time=60;
        recipe2.ProductList=["5 dkg füstölt szalonna","6 db csirkemell filé","1 közepes fej vöröshagyma","6 gerezd fokhagyma","10 dkg sűrített paradicsom","1.5 kg burgonya","2 dl napraforgó olaj (vagy zsír)"];
        recipe2.Steps.push("A csirkemelleket vékony csíkokra vágjuk.A szalonnát kockára vágjuk, hagymát is felkockázzuk.");
        recipe2.Steps.push("Egy nagyobb serpenyőt felforrósítunk. Belerakjuk a szalonnát, ha kiolvadt a zsírja, kiszedjük és félrerakjuk. A hagymát a forró zsíron egy kicsit megdinszteljük, és már mehet is hozzá a husi. A tűzet mérsékeljük, és fedő alatt hagyjuk párolódni a mellet.");
        recipe2.Steps.push("Ha a hús elfőtte a levét(fedő nélkül), kevergetve rózsaszínűre pirítjuk.")
        recipe2.Steps.push("Ha megpirult a husink, fűszerezzük, és hozzáadjuk a konzerv paradicsomot, a fokhagymát rányomjuk vagy reszeljük. 1 dl vizet is öntünk alá, hogy szaftos legyen, megszórjuk 1 tk pirospaprikával a brassóit, még egyet rottyantunk rajta, és lezárjuk a lángot.");
        recipe2.Steps.push("A burgonyát apróbb kockára vágjuk, zsiradékon kisütjük (ne legyen nagyon kiszárítva). (Lehet mirelit burgonyát is használni, nem baj, ha csíkokra van vágva.)")
        recipe2.Steps.push("A sült krumplit, a sült szalonnapörcöt a brassóival összekeverjük, kóstoljuk és kész. Jó étvágyat!");
    

        let recipe3=new Recipe();
        recipe3.id=3;
        recipe3.Name="Rakott kelképoszta";
        recipe3.Price=1350;
        recipe3.Time=60;
        recipe3.ProductList=["60 dkg sertéslapocka (darálva)","example4","10 dkg sertészsír",
        "1 nagy fej vöröshagyma",
        "1 ek fűszerpaprika",
        "só ízlés szerint",
        "bors ízlés szerint",
        "3 kg kelkáposzta",
        "1 teáskanál só",
        ];
        recipe3.Steps.push("A kelkáposztát 4 felé vágjuk, torzsáját kivágjuk (úgy, hogy azért a negyed fej ne essen szét), annyi sós vízbe tesszük fel főzni, hogy a vízellepje.");
        recipe3.Steps.push("A hagymát megpucoljuk, kockákra vágjuk, és a zsírban üvegesre pároljuk.");
        recipe3.Steps.push("Lehúzzuk a tűzről, belekeverjük a pirospaprikát, ízlés szerint megsózzuk.");
        recipe3.Steps.push("Visszatesszük a tűzre, beletesszük a darált húst, és közepes lángon, míg morzsáira szétesik, kevergetvefőzzük. Ha megpuhult, ízlés szerint borsozzuk. Félretesszük.");
        recipe3.Steps.push("A zacskós rizst az előírásoknak megfelelően puhára főzzük, ha megfőtt, lecsepegtetjük, és belekeverjük a darált húsba. (Megkóstoljuk, ha kell, utánaízesítünk.");
        recipe3.Steps.push("Amikor a kelkáposzta megfőtt, (torzsa résznél egy villával ellenőrizzük) leöntjük a levét, kicsit hagyjuk hűlni. Addig a 2 pohár tejfölt 2 tojással, kevés sóval kikeverjük.");
        recipe3.Steps.push("A kelkáposzta felét szétosztjuk a tepsiben. Rátesszük a darált húsos keveréket. A tejföl kicsivel több mint felét eloszlatjuk rajta.");
        recipe3.Steps.push("Rátesszük a kelkáposzta másik felét, a maradék tejfölt elsimítjuk a tetején.");

        let recipe4=new Recipe();
        recipe4.id=4;
        recipe4.Name="Gulyás leves";
        recipe4.Price=1500;
        recipe4.Time=60;
        recipe4.ProductList=["1 kg sertéshús",
            "2 közepes db vöröshagyma",
            "2 kg burgonya",
            "só ízlés szerint",
           "bors ízlés szerint",
             "teáskanál fűszerpaprika",
            "4 ek napraforgó olaj",
            "4 gerezd fokhagyma",
            "1 kávéskanál őrölt fűszerkömény",
            "1 dl vörösbor",
            "30 dkg finomliszt",
            "2 db tojás",
            "2 kávéskanál só"
            ];
        recipe4.Steps.push("Vöröshagymát megpucoljuk, felkockázzuk, olajon megdinszteljük, meghintjük fűszerpaprikával. Hozzáadjuk a felkockázott húst.");
        recipe4.Steps.push("Ízlés szerint sózzuk, fűszerezzük, meghintjük köménnyel, belepréseljük a fokhagymát.");
        recipe4.Steps.push("Ráöntjük a vörösbort és annyi vizet, amennyi ellepi.");
        recipe4.Steps.push("Amikor félig megpuhult a hús, beletesszük a megpucolt és cikkekre vágott burgonyát.");
        recipe4.Steps.push("Lisztből és a tojásból só fűszerezésével tésztát gyúrunk, majd beleszaggatjuk a gulyásba, és készre főzzük.");
        

        this.RecipesList.push(recipe1);
        this.RecipesList.push(recipe2);
        this.RecipesList.push(recipe3);
        this.RecipesList.push(recipe4);

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