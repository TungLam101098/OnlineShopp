import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingService } from '../services/setting.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  SettingForm :FormGroup;
  constructor(private auth:AuthService,private SettingService: SettingService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.getData();
    this.initForm();
    
  }
  initForm(){
    this.SettingForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
    })
  }
  onSendSetting(){
    this.SettingService.addContact(this.SettingForm.value).then(result=>{
      if(result){
        alert("Submit success");
        this.router.navigateByUrl('/');
      }
    }).catch(err=>{
      console.log(err);
      alert("error!");
    })
  }
  getData() {
    this.auth.checkLogin().onAuthStateChanged(user=>{
      if(user) {
        this.SettingService.getContact(user.uid).then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            if(doc.id!=null){
              this.router.navigateByUrl('/editAccount');
              console.log(doc.id,doc.data());
            }
        });
        });
      }
    })
    
  }

}
