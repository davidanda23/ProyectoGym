import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CanEditGuard } from './auth/can-edit.guard';
import { CanAdminGuard } from './auth/can-admin.guard';
import { CanSuscriptorGuard } from './auth/can-suscriptor.guard';


<<<<<<< HEAD

=======
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
<<<<<<< HEAD
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'contacto', loadChildren: () => import('./contacto/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'comentarios', loadChildren: () => import('./comentarios/comentarios.module').then(m => m.ComentariosModule) },
  { path: 'clases', loadChildren: () => import('./clases/clases.module').then(m => m.ClasesModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'verification-email',component: SendEmailComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  //{ path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),canActivate:[CanEditGuard], },
  { path: 'suscriptor', loadChildren: () => import('./suscriptor/suscriptor.module').then(m => m.SuscriptorModule)}
  
=======
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  /*"Editor" consultar con el equipo si se debe borrar o dejar en el proyecto*/
  { path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),canActivate:[CanEditGuard], },
  { path: 'suscriptor', loadChildren: () => import('./suscriptor/suscriptor.module').then(m => m.SuscriptorModule),canActivate:[CanSuscriptorGuard], }
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
