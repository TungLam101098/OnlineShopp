import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  @Input('urls') url: string;
  @Input('product') product: string;
  @Input('title') title: string;
  @Input('price') price: number;
  @Input('oldprice') oldprice: number;
  @Input('class') class : string;
  @Input('active') active: string;
  constructor() { }

  ngOnInit() {
  }

}
