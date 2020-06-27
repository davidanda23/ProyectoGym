import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import { first, switchMap, map } from 'rxjs/operators';
import { promise } from 'protractor';
import {auth} from 'firebase/app'; 
import {user} from '../../shared/models/user.interface';
import { Observable, of } from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({providedIn: 'root'})

export class AuthService extends RoleValidator{
  public user$: Observable<user>;
  constructor(public afAuth: AngularFireAuth, private afs:AngularFirestore) { 
    super();
    this.user$=this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user){
          return this.afs.doc<user>(`users/${user.uid}`).valueChanges();//user
        }
        return of(null);
      })
    )
  }
  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  async sendVerificationEmail():Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password: string):Promise<user>{
    try{
      const {user}= await this.afAuth.signInWithEmailAndPassword(email,password);
      return user;
    }catch(error){
      console.log(error);
    }
  }
  async register(email: string, password: string):Promise<user>{
    try{
      const {user}= await this.afAuth.createUserWithEmailAndPassword(email,password);
      this.sendVerificationEmail();
      this.updateUserData(user);
      return user;
    }catch(error){
      console.log(error);
    }
    
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.log(error);
    }
  }

  private updateUserData(user:user){
    const userRef: AngularFirestoreDocument<any>=this.afs.doc(`users/${user.uid}`);
    const data:user={
      uid:user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      role: {
        suscriptor: true
      }
      
    };
    return userRef.set(data,{merge:true});
  }

  isUserAdmin(userUid){
    return this.afs.doc<user>(`users/${userUid}`).valueChanges();
  }
}
