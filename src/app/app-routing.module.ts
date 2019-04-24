import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CasualComponent } from './men/casual/casual.component';
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
import { EditComponent } from './account/edit/edit.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path:'account',component: AccountComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'cart',component: CartComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'login',component:LoginComponent},
  {path:'menCasual',component:CasualComponent},
  {path:'menSports',component:SportsComponent},
  {path:'menFormal',component:FormalComponent},
  {path:'menTshirts',component:TshirtsComponent},
  {path:'menShirts',component:ShirtsComponent},
  {path:'menJeans',component:JeansComponent},
  {path:'menTrousers',component:TrousersComponent},
  {path:'menSleepWear',component:SleepwearComponent},
  {path:'menSandals',component:SandalsComponent},
  {path:'menLoadfers',component:LoadfersComponent},
  {path:'womenkurta&kurti',component:KurtaComponent},
  {path:'womenTrousers',component:WomentrousersComponent},
  {path:'womenCasual',component:WomencasualComponent},
  {path:'womenSports',component:WomensportsComponent},
  {path:'womenFormal',component:WomenformalComponent},
  {path:'womenSarees',component:WomensareesComponent},
  {path:'womenShoes',component:WomenshoesComponent},
  {path:'womenSleepwear',component:WomensleepwearComponent},
  {path:'womenSandals',component:WomensandalsComponent},
  {path:'womenLoadfers',component:WomenloadfersComponent},
  {path:'womenRings',component:WomenringsComponent},
  {path:'womenEarrings',component:WomenearringsComponent},
  {path:'womenJewellerySets',component:WomenjewelleryComponent},
  {path:'womenLockets',component:WomenlocketsComponent},
  {path:'womenDisabled',component:WomendisabledComponent},
  {path:'womenJeans',component:WomenjeansComponent},
  {path:'womenPoloT-Shirts',component:WomenpolotshirtsComponent},
  {path:'womenSKirts',component:WomenskirtsComponent},
  {path:'womenJackets',component:WomenjacketsComponent},
  {path:'womenTops',component:WomentopsComponent},
  {path:'womenMakeUp',component:WomenmakeupComponent},
  {path:'womenHairCare',component:WomenhaircareComponent},
  {path:'womenPerfumes',component:WomenperfumesComponent},
  {path:'womenSkinCare',component:WomenskincareComponent},
  {path:'womenHandBags',component:WomenhandbagsComponent},
  {path:'womenSingleBags',component:WomensinglebagsComponent},
  {path:'womenTravelBags',component:WomentravelComponent},
  {path:'womenWallets&Belts',component:WomenwalletsComponent},
  {path:'womenSunglases',component:WomensunglasesComponent},
  {path:'womenNail',component:WomennailComponent},
  {path:'kidsCasual',component:KidscasualComponent},
  {path:'kidsSports',component:KidssportsComponent},
  {path:'kidsFormal',component:KidsformalComponent},
  {path:'kidsStandard',component:KidsstandardComponent},
  {path:'kidsT-Shirts',component:KidstshirtsComponent},
  {path:'kidsShirts',component:KidsshirtsComponent},
  {path:'kidsJeans',component:KidsjeansComponent},
  {path:'kidsTrousers',component:KidstrousersComponent},
  {path:'kidsSleepWear',component:KidssleepwearComponent},
  {path:'kidsSandals',component:KidssandalsComponent},
  {path:'kidsLoafers',component:KidsloafersComponent},
  {path:'Sports',component:SportallComponent},
  {path:'Camera',component:CameraComponent},
  {path:'Mobile',component:MobileComponent},
  {path:'Tablet',component:TabletComponent},
  {path:'Laptop',component:LaptopComponent},
  {path:'Accesories',component:AccesoriesComponent},
  {path:'Furniture',component:FurnitureComponent},
  {path:'BlogStyle1',component:Blog1Component},
  {path:'BlogStyle2',component:Blog2Component},
  {path:'BlogSingle',component:BlogsingleComponent},
  {path:'Contact',component:ContactComponent},
  {path:'ShopPage',component:ShoppageComponent},
  {path:'ShopSingle',component:ShopsingleComponent},
  {path:'Product',component:ProductComponent},
  {path:'ProductDetail',component:ProductdetailComponent},
  {path:'editAccount',component:EditComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
