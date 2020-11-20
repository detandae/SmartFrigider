import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frigider-main',
  templateUrl: './frigider-main.component.html',
  styleUrls: ['./frigider-main.component.css']
})
export class FrigiderMainComponent implements OnInit {

  constructor() { 
    document.title="Hűtő"
  }

  ngOnInit() {
  }

}
