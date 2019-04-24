import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  @Input('urls') url: string;
  @Input('title') title: string;
  @Input('price') price: number;
  @Input('oldprice') oldprice: number;
  @Input('class') class : string;
  @Input('active') active: string;
  
  constructor() { }

  ngOnInit() {
  }

}
