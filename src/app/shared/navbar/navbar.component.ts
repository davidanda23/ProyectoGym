import { Component} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public user$: Observable<user> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) { }

  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit(): void {
    this.getCurrentUser();
  }
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error)
    }
    this.authSvc.logout();
  }

  getCurrentUser(){
    this.authSvc.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid=auth.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.role).hasOwnProperty('admin');
        })
      }
    })
  }

}

