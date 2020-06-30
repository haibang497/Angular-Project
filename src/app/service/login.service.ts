import { SharingService } from './sharing.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth, private router:Router, private sharingService: SharingService) { }
  async signinGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return await  this.afAuth.signInWithPopup(provider)
            .then(res=>{
              console.log("Login Success with Gmail")
      //this.router.navigate(['/main']);
              //this.router.navigate(['main']);
      })
  }
  siginFirebase(email: string, password:string){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(res => {       
     
      resolve(res);
      this.sharingService.isUserLoggedIn.next(true);
      }, err => reject(err))
    })
  }
  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.currentUser){
      //if (this.fauth.auth.currentUser){
  
      this.afAuth.signOut();
      resolve("Logged out");
      console.log("Logout");
      this.sharingService.isUserLoggedIn.next(false);
      }else{
      reject();
      }
  
    })
  }
}
