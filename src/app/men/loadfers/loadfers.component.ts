import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadfers',
  templateUrl: './loadfers.component.html',
  styleUrls: ['./loadfers.component.css']
})
export class LoadfersComponent implements OnInit {

  menLoadfers=[
    {url:"assets/img/Men/MenLoadfers/loadfers-1.jpg",title:"Polo T-Shirt",price:"$45.50",oldprice:"$65.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-2.jpg",title:"T-Shirt",price:"$45.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-3.jpg",title:"Polo T-Shirt",price:"$43.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenLoadfers/loadfers-4.jpg",title:"Polo T-Shirt",price:"$41.50",oldprice:"$65.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-5.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenLoadfers/loadfers-6.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenLoadfers/loadfers-7.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-8.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-9.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenLoadfers/loadfers-10.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenLoadfers/loadfers-11.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenLoadfers/loadfers-12.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
