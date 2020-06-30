import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFirestore,	public afAuth: AngularFireAuth) { }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
      } else {				 
        reject('There are no user at this time');
      }
      })
  })
}
}