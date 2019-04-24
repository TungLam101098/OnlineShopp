import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SettingService } from 'src/app/services/setting.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  firstName :string;
  lastName : string;
  email : string;
  phone :string;
  address : string;
  SettingForm: FormGroup;
  constructor(private auth: AuthService,private SettingService: SettingService) { }

  ngOnInit() {
    this.auth.checkLogin().onAuthStateChanged(user=>{
      if(user) {
        this.SettingService.getContact(user.uid).then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            this.firstName=doc.data().firstName; 
            this.lastName=doc.data().lastName; 
            this.email=doc.data().email; 
            this.phone=doc.data().phone; 
            this.address=doc.data().address; 
        });
        });
      }
    })
  }
  updateData() {
    this.SettingService
      .updateSetting(this.SettingForm.value)
      .then(ree => {
        console.log(ree);
        alert("Cập Nhật Thành Công");
      })
      .catch(err => {
        console.log(err);
        alert("Fail");
      });
  }

}
