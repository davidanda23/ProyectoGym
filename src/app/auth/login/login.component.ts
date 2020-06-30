import { FormGroup, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { user } from '../../shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
      this.checkUserIsVerified(user);
    }catch(error){console.log(error)}
    this.authSvc.login(email, password);
  }

  private checkUserIsVerified(user:user){
    if(user && user.emailVerified){
      this.router.navigate(['/home']);
    }else if(user){
      this.router.navigate(['/verification-email']);
    }else{
      this.router.navigate(['/register']);
    }
  }
}
