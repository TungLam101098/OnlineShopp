import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component implements OnInit {

  @Input('urls') url: string;
  @Input('view') view: number;
  @Input('like') like: number;
  @Input('cmt') cmt: number;
  @Input('time') time : string;
  @Input('title') title : string;

  @Input('detail') detail : string;


  constructor() { }

  ngOnInit() {
  }

}
