import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { Card1Component } from './share/card1/card1.component';
import { Card2Component } from './share/card2/card2.component';
import { Card3Component } from './share/card3/card3.component';
import { Card4Component } from './share/card4/card4.component';
import { CasualComponent } from './men/casual/casual.component';
import { CardMainComponent } from './share/card-main/card-main.component';
import { SportsComponent } from './men/sports/sports.component';
import { FormalComponent } from './men/formal/formal.component';
import { TshirtsComponent } from './men/tshirts/tshirts.component';
import { ShirtsComponent } from './men/shirts/shirts.component';
import { JeansComponent } from './men/jeans/jeans.component';
import { TrousersComponent } from './men/trousers/trousers.component';
import { SleepwearComponent } from './men/sleepwear/sleepwear.component';
import { SandalsComponent } from './men/sandals/sandals.component';
import { LoadfersComponent } from './men/loadfers/loadfers.component';
import { KurtaComponent } from './women/kurta/kurta.component';
import { WomentrousersComponent } from './women/womentrousers/womentrousers.component';
import { WomencasualComponent } from './women/womencasual/womencasual.component';
import { WomensportsComponent } from './women/womensports/womensports.component';
import { WomenformalComponent } from './women/womenformal/womenformal.component';
import { WomensareesComponent } from './women/womensarees/womensarees.component';
import { WomenshoesComponent } from './women/womenshoes/womenshoes.component';
import { WomensleepwearComponent } from './women/womensleepwear/womensleepwear.component';
import { WomensandalsComponent } from './women/womensandals/womensandals.component';
import { WomenloadfersComponent } from './women/womenloadfers/womenloadfers.component';
import { WomenringsComponent } from './women/womenrings/womenrings.component';
import { WomenearringsComponent } from './women/womenearrings/womenearrings.component';
import { WomenjewelleryComponent } from './women/womenjewellery/womenjewellery.component';
import { WomenlocketsComponent } from './women/womenlockets/womenlockets.component';
import { WomendisabledComponent } from './women/womendisabled/womendisabled.component';
import { WomenjeansComponent } from './women/womenjeans/womenjeans.component';
import { WomenpolotshirtsComponent } from './women/womenpolotshirts/womenpolotshirts.component';
import { WomenskirtsComponent } from './women/womenskirts/womenskirts.component';
import { WomenjacketsComponent } from './women/womenjackets/womenjackets.component';
import { WomentopsComponent } from './women/womentops/womentops.component';
import { WomenmakeupComponent } from './women/womenmakeup/womenmakeup.component';
import { WomenhaircareComponent } from './women/womenhaircare/womenhaircare.component';
import { WomenperfumesComponent } from './women/womenperfumes/womenperfumes.component';
import { WomenskincareComponent } from './women/womenskincare/womenskincare.component';
import { WomenhandbagsComponent } from './women/womenhandbags/womenhandbags.component';
import { WomensinglebagsComponent } from './women/womensinglebags/womensinglebags.component';
import { WomentravelComponent } from './women/womentravel/womentravel.component';
import { WomenwalletsComponent } from './women/womenwallets/womenwallets.component';
import { WomensunglasesComponent } from './women/womensunglases/womensunglases.component';
import { WomennailComponent } from './women/womennail/womennail.component';
import { KidscasualComponent } from './kids/kidscasual/kidscasual.component';
import { KidssportsComponent } from './kids/kidssports/kidssports.component';
import { KidsformalComponent } from './kids/kidsformal/kidsformal.component';
import { KidsstandardComponent } from './kids/kidsstandard/kidsstandard.component';
import { KidstshirtsComponent } from './kids/kidstshirts/kidstshirts.component';
import { KidsshirtsComponent } from './kids/kidsshirts/kidsshirts.component';
import { KidsjeansComponent } from './kids/kidsjeans/kidsjeans.component';
import { KidstrousersComponent } from './kids/kidstrousers/kidstrousers.component';
import { KidssleepwearComponent } from './kids/kidssleepwear/kidssleepwear.component';
import { KidssandalsComponent } from './kids/kidssandals/kidssandals.component';
import { KidsloafersComponent } from './kids/kidsloafers/kidsloafers.component';
import { SportallComponent } from './sportall/sportall.component';
import { CameraComponent } from './digital/camera/camera.component';
import { MobileComponent } from './digital/mobile/mobile.component';
import { TabletComponent } from './digital/tablet/tablet.component';
import { LaptopComponent } from './digital/laptop/laptop.component';
import { AccesoriesComponent } from './digital/accesories/accesories.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';
import { BlogsingleComponent } from './blog/blogsingle/blogsingle.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppageComponent } from './pages/shoppage/shoppage.component';
import { ShopsingleComponent } from './pages/shopsingle/shopsingle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import  * as firebase from 'firebase/app';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { SettingService } from './services/setting.service';
import { EditComponent } from './account/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AccountComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    CasualComponent,
    CardMainComponent,
    SportsComponent,
    FormalComponent,
    TshirtsComponent,
    ShirtsComponent,
    JeansComponent,
    TrousersComponent,
    SleepwearComponent,
    SandalsComponent,
    LoadfersComponent,
    KurtaComponent,
    WomentrousersComponent,
    WomencasualComponent,
    WomensportsComponent,
    WomenformalComponent,
    WomensareesComponent,
    WomenshoesComponent,
    WomensleepwearComponent,
    WomensandalsComponent,
    WomenloadfersComponent,
    WomenringsComponent,
    WomenearringsComponent,
    WomenjewelleryComponent,
    WomenlocketsComponent,
    WomendisabledComponent,
    WomenjeansComponent,
    WomenpolotshirtsComponent,
    WomenskirtsComponent,
    WomenjacketsComponent,
    WomentopsComponent,
    WomenmakeupComponent,
    WomenhaircareComponent,
    WomenperfumesComponent,
    WomenskincareComponent,
    WomenhandbagsComponent,
    WomensinglebagsComponent,
    WomentravelComponent,
    WomenwalletsComponent,
    WomensunglasesComponent,
    WomennailComponent,
    KidscasualComponent,
    KidssportsComponent,
    KidsformalComponent,
    KidsstandardComponent,
    KidstshirtsComponent,
    KidsshirtsComponent,
    KidsjeansComponent,
    KidstrousersComponent,
    KidssleepwearComponent,
    KidssandalsComponent,
    KidsloafersComponent,
    SportallComponent,
    CameraComponent,
    MobileComponent,
    TabletComponent,
    LaptopComponent,
    AccesoriesComponent,
    FurnitureComponent,
    Blog1Component,
    Blog2Component,
    BlogsingleComponent,
    ContactComponent,
    ShoppageComponent,
    ShopsingleComponent,
    NotfoundComponent,
    ProductComponent,
    ProductdetailComponent,
    EditComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    
  ],
  providers: [
    AuthService,
    SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    var config = {
      apiKey: "AIzaSyB69RfD7zC1KCl1FSCnSaoXhdc6A3k9Pi4",
      authDomain: "onlineshop-fcc06.firebaseapp.com",
      databaseURL: "https://onlineshop-fcc06.firebaseio.com",
      projectId: "onlineshop-fcc06",
      storageBucket: "onlineshop-fcc06.appspot.com",
      messagingSenderId: "973260186628"
    };
    firebase.initializeApp(config);
    
  }
}
