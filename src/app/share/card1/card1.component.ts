import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  @Input('urls') url: string;
  @Input('title') title: string;
  @Input('object') object: string;
  constructor() { }

  ngOnInit() {
  }

}
