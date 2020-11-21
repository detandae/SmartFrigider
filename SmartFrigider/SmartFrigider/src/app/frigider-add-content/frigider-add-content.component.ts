import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frigider-add-content',
  templateUrl: './frigider-add-content.component.html',
  styleUrls: ['./frigider-add-content.component.css']
})
export class FrigiderAddContentComponent implements OnInit {

  constructor() { 
    document.title="Termék felvétel"
  }

  ngOnInit() {
  }

}
