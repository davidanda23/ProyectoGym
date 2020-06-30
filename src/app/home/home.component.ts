import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {user} from '../shared/models/user.interface';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.scss'],
  //encapsulation: ViewEncapsulation.None
=======
<<<<<<< HEAD
  styleUrls: ['./home.component.scss'],
  //encapsulation: ViewEncapsulation.None
=======
  styleUrls: ['./home.component.scss']
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid=auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.role).hasOwnProperty('admin');
        })
      }
    })
  }

}
