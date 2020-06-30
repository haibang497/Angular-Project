import { AuthenGuard } from './guard/authen.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CreateAccountComponent } from './create-account/create-account.component';



const routes: Routes = [
  {path:"", component:LoginLayoutComponent},
  {path:"login", component:LoginLayoutComponent},
  {path:"admin", component: MainLayoutComponent,
    canActivate:[AuthenGuard],
    children:[
      {path:"signup", component: CreateAccountComponent},
      {path:"main", component: MainComponent}
    ]},
    {path: "**", component:LoginLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
