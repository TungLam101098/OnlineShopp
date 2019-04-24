import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css']
})
export class TrousersComponent implements OnInit {

  menTrousers=[
    {url:"assets/img/Men/MenTrousers/trousers-1.jpg",title:"Polo T-Shirt",price:"$45.50",oldprice:"$65.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenTrousers/trousers-2.jpg",title:"T-Shirt",price:"$45.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenTrousers/trousers-3.jpg",title:"Polo T-Shirt",price:"$43.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenTrousers/trousers-4.jpg",title:"Polo T-Shirt",price:"$41.50",oldprice:"$65.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/Men/MenTrousers/trousers-5.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenTrousers/trousers-6.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenTrousers/trousers-7.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenTrousers/trousers-8.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenTrousers/trousers-9.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenTrousers/trousers-10.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenTrousers/trousers-11.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenTrousers/trousers-12.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
