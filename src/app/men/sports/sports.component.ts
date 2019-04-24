import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  menCasual=[
    {url:"assets/img/Men/MenSports/sport-1.jpg",title:"Polo T-Shirt",price:"$45.50",oldprice:"$65.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenSports/sport-2.jpg",title:"T-Shirt",price:"$45.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenSports/sport-3.jpg",title:"Polo T-Shirt",price:"$43.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenSports/sport-4.jpg",title:"Polo T-Shirt",price:"$41.50",oldprice:"$65.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/Men/MenSports/sport-5.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenSports/sport-6.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenSports/sport-7.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenSports/sport-8.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenSports/sport-9.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenSports/sport-10.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenSports/sport-11.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenSports/sport-12.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
