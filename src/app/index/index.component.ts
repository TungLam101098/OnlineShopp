import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cards1 = [
    {url:"assets/img/promo-banner-3.jpg",title:"Exclusive Item",object:"For Men"},
    {url:"assets/img/promo-banner-2.jpg",title:"Sale Off",object:"On Shoes"},
    {url:"assets/img/promo-banner-4.png",title:"New Arrivals",object:"For Kids"},
    {url:"assets/img/promo-banner-5.png",title:"25% Off",object:"For Bags"}
  ]

  men=[
    {url:"assets/img/man/polo-shirt-2.png",title:"Polo T-Shirt",price:"$45.50",oldprice:"$65.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/man/t-shirt-1.png",title:"T-Shirt",price:"$45.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/man/polo-shirt-1.png",title:"Polo T-Shirt",price:"$43.50",oldprice:"",class:"",active:""},
    {url:"assets/img/man/polo-shirt-4.png",title:"Polo T-Shirt",price:"$41.50",oldprice:"$65.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/man/polo-shirt-5.png",title:"T-Shirt",price:"$40.50",oldprice:"",class:"",active:""},
    {url:"assets/img/man/polo-shirt-6.png",title:"Polo T-Shirt",price:"$39.50",oldprice:"",class:"",active:""},
    {url:"assets/img/man/polo-shirt-2.png",title:"Polo T-Shirt",price:"$31.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/man/t-shirt-1.png",title:"T-Shirt",price:"$49.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  women=[
    {url:"assets/img/women/girl-1.png",title:"short skirt",price:"$100",oldprice:"$155.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/women/girl-2.png",title:"Ultra-thin skirt",price:"$85.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/women/girl-3.png",title:"T-Shirt",price:"$23.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-4.png",title:"body skirt",price:"$101.50",oldprice:"$165.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/women/girl-5.png",title:"body skirt",price:"$120.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-6.png",title:"office dress",price:"$109.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-7.png",title:"body skirt",price:"$51.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/women/girl-1.png",title:"short skirt",price:"$109.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  sport=[
    {url:"assets/img/sports/sport-1.png",title:"boxing gloves",price:"$100",oldprice:"$155.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/sports/sport-2.png",title:"snowboards",price:"$85.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/sports/sport-3.png",title:"snowboards",price:"$23.50",oldprice:"",class:"",active:""},
    {url:"assets/img/sports/sport-4.png",title:"tennis racket",price:"$101.50",oldprice:"$165.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/sports/sport-5.png",title:"tennis racket",price:"$120.50",oldprice:"",class:"",active:""},
    {url:"assets/img/sports/sport-6.png",title:"table tennis bats",price:"$109.50",oldprice:"",class:"",active:""},
    {url:"assets/img/sports/sport-7.png",title:"sport shoes",price:"$51.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/sports/sport-8.png",title:"sport shoes",price:"$109.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  electronics=[
    {url:"assets/img/electronics/electronic-1.png",title:"iphone 4",price:"$100",oldprice:"$155.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/electronics/electronic-2.png",title:"laptop toshiba",price:"$85.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/electronics/electronic-3.png",title:"tablet",price:"$23.50",oldprice:"",class:"",active:""},
    {url:"assets/img/electronics/electronic-4.png",title:"printer",price:"$101.50",oldprice:"$165.50",class:"aa-badge aa-hot",active:"HOT!"},
    {url:"assets/img/electronics/electronic-5.png",title:"camera canon",price:"$120.50",oldprice:"",class:"",active:""},
    {url:"assets/img/electronics/electronic-6.png",title:"camera",price:"$109.50",oldprice:"",class:"",active:""},
    {url:"assets/img/electronics/electronic-7.png",title:"USB",price:"$51.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/electronics/electronic-8.png",title:"micaro",price:"$109.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  popular=[
    {url:"assets/img/man/polo-shirt-2.png",title:"Polo T-Shirt",price:"$100",oldprice:"$155.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/women/girl-2.png",title:"Lorem ipsum doller",price:"$85.50",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
    {url:"assets/img/man/t-shirt-1.png",title:"T-Shirt",price:"$23.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-3.png",title:"Lorem ipsum doller",price:"$101.50",oldprice:"$165.50",class:"aa-badge aa-hot",active:"HOT!"},

  ]

  featured=[
    {url:"assets/img/man/polo-shirt-1.png",title:"Polo T-Shirt",price:"$120.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-4.png",title:"Lorem ipsum doller",price:"$109.50",oldprice:"",class:"",active:""},
    {url:"assets/img/man/polo-shirt-4.png",title:"Polo T-Shirt",price:"$51.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/women/girl-1.png",title:"body lorem",price:"$109.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]
  latest=[
    {url:"assets/img/man/polo-shirt-2.png",title:"Polo T-Shirt",price:"$120.50",oldprice:"",class:"",active:""},
    {url:"assets/img/women/girl-2.png",title:"Lorem ipsum doller",price:"$109.50",oldprice:"",class:"",active:""},
    {url:"assets/img/man/t-shirt-1.png",title:"T-Shirt",price:"$51.50",oldprice:"$70.50",class:"aa-badge aa-sale",active:"SALE!"},
    {url:"assets/img/women/girl-3.png",title:"Lorem ipsum doller",price:"$109.99",oldprice:"",class:"aa-badge aa-sold-out",active:"Sold Out!"},
  ]

  support=[
    {class:"fa fa-truck",title:"FREE SHIPPING",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis."},
    {class:"fa fa-clock-o",title:"30 DAYS MONEY BACK",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis."},
    {class:"fa fa-phone",title:"SUPPORT 24/7",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis."},
  ]

  blog=[
    {url:"assets/img/promo-banner-1.jpg",view:"5K",like:"426",cmt:"20",time:"June 26, 2016",title:"Lorem ipsum dolor sit amet",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."},
    {url:"assets/img/promo-banner-3.jpg",view:"2K",like:"123",cmt:"50",time:"May 10, 2017",title:"Lorem ipsum dolor sit amet",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."},
    {url:"assets/img/promo-banner-1.jpg",view:"1",like:"120",cmt:"12",time:"Sep 2, 2016",title:"Lorem ipsum dolor sit amet",detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."},
  ]
  constructor() { }

  ngOnInit() {
  }


}
