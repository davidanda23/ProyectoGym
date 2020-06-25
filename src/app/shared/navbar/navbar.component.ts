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

}

