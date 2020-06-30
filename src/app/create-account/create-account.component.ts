import { AuthenticationService } from './../service/authentication.service';

import { UserCreateService } from './../service/user-create.service';
import { Account } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../model/CustomValidator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private account: UserCreateService, private auth: AuthenticationService) { }
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname:['',Validators.required], 
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['', Validators.required],
      confirmpassword: ['', Validators.required]},
      {
        validator: MustMatch('password', 'confirmpassword')
      }
      );
  }
  onSubmit(){
    let acc=new Account();
    acc.firstname=this.registerForm.controls["firstname"].value;
    acc.lastname=this.registerForm.controls["lastname"].value;
    acc.email=this.registerForm.controls["email"].value;
    acc.password=this.registerForm.controls["password"].value;
    console.log(acc);
    this.account.insertAccount(acc).subscribe(data=>console.log(data));
  }
  createAcc(){
    let acc=new Account();
    acc.firstname=this.registerForm.controls["firstname"].value;
    acc.lastname=this.registerForm.controls["lastname"].value;
    acc.email=this.registerForm.controls["email"].value;
    acc.password=this.registerForm.controls["password"].value;

    this.auth.signup(acc.email, acc.password).then(res=>(console.log(res)));
  }

}
