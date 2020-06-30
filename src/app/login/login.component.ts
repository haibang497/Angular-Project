import { element } from 'protractor';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginAuth: LoginService, private router: Router, private fb:FormBuilder) { }
  frm: FormGroup;
  ngOnInit(): void {
    this.frm=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    }
    )
  }
  tryGoogleLogin(){
    this.loginAuth.signinGmail()
     .then(res=>{
       //this.router.navigate(["/main"]);
       location.href="/admin/main"
       }).catch(err=>{
         console.log(err); 
        
       })
   }
   onSubmit(){}
   loginwithfirebase(){
     let email=this.frm.controls["email"].value;
     let password=this.frm.controls["password"].value;
     this.loginAuth.siginFirebase(email, password)
     .then(res=>{
       console.log("Login success");
       this.router.navigate(['/admin/main']);
       //location.href="/main"
     });

   }

}
