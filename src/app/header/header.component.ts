import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean=false;
  name : string;
  constructor(private auth: AuthService,private SettingService: SettingService) { }

  ngOnInit() {
    this.auth.checkLogin().onAuthStateChanged(user=>{
      console.log(user);
      if(user) {
        
        this.isLogin = true;
        this.SettingService.getContact(user.uid).then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            this.name=doc.data().lastName; 
        });
        });
      }
      
      else this.isLogin = false;
    })
  }

  isLogOut(){
    this.auth.onLogOut().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);

    })
  }
}
