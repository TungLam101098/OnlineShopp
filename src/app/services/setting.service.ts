import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  db = firebase.firestore();
  constructor() { }
  addContact(setting): Promise<any> {
    setting.userid = firebase.auth().currentUser.uid;
    return this.db.collection("setting").add(setting);
  }
  getContact(userid) {
    return this.db
      .collection("setting")
      .where("userid", "==", userid)
      .get();
  }
  updateSetting( data) {
    return this.db
      .collection("setting")
      .doc()
      .update(data);
  }
}
