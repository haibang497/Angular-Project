import { SharingService } from './../service/sharing.service';
import { LoginService } from './../service/login.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public displayName:string="";
  constructor(private router: Router, private fauthService: LoginService, private userService:UserService, private shareingService: SharingService) {
    this.shareingService.isUserLoggedIn.subscribe(value=>{
      if(value){
        this.userService.getCurrentUser()
        .then(userService=>{
          console.log(userService);
          //this.displayName=userService!=null? userService.displayName: userService.email;
          this.displayName=userService.displayName!=null? userService.displayName: userService.email;
          console.log(this.displayName);
        }).catch(err=>console.log("Error get current user")); 
      }
      else{
        this.displayName="";
      }
    });
   }
 
  ngOnInit(): void {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
				console.log(this.displayName);
  }
  Logout(){
    this.fauthService.logout();
    //location.href="/";
    this.router.navigate(['/']);
  }

}
