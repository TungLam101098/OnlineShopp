import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formal',
  templateUrl: './formal.component.html',
  styleUrls: ['./formal.component.css']
})
export class FormalComponent implements OnInit {

  menFormal=[
    {url:"assets/img/Men/MenFormal/formal-1.jpg",title:"Polo T-Shirt",price:"$45.50",oldprice:"$65.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenFormal/formal-2.jpg",title:"T-Shirt",price:"$45.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenFormal/formal-3.jpg",title:"Polo T-Shirt",price:"$43.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenFormal/formal-4.jpg",title:"Polo T-Shirt",price:"$41.50",oldprice:"$65.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/Men/MenFormal/formal-5.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenFormal/formal-6.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenFormal/formal-7.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenFormal/formal-8.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/Men/MenFormal/formal-9.jpg",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenFormal/formal-10.jpg",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/Men/MenFormal/formal-11.jpg",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/Men/MenFormal/formal-12.jpg",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
