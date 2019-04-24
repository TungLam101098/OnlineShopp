import { Injectable } from '@angular/core';
import  * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router :Router) { }

  onLogin(user){
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
      alert("Login failed")
    })
  }
  onRegister(user){
    return firebase.auth().createUserWithEmailAndPassword(user.email,user.password);
  }
  checkLogin(){
    return firebase.auth();
  }
  onLogOut(){
    return firebase.auth().signOut();
  }
}
