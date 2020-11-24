import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-frigider-main',
  templateUrl: './frigider-main.component.html',
  styleUrls: ['./frigider-main.component.css']
})
export class FrigiderMainComponent implements OnInit {

  constructor(private route: ActivatedRoute,private  router: Router) {
    document.title="Hűtő"
   }

  ngOnInit() {
 
  }

  OnBackClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  OnHomeClicked()
  {
    this.router.navigate(['../MainPage']);
  }
  OnFrigiderContentclicked()
  {
    this.router.navigate(['../FrigiderContent']);
  }
  AddContentClicked()
  {
    this.router.navigate(['../FrigiderAddContent']);
  }
}
