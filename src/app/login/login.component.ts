import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
users: string[] = [];
  
username: any;
password: any;
constructor(private router: Router) {}

navigateToLogin() {
  this.router.navigate(['/login']); // Navigate to the login route
}
onButtonClick() {
  // Navigate to the desired path when the button is clicked
  this.router.navigate(['/home']); // Replace 'other-path' with the path you want to navigate to
}
navigateToSignup(){
  this.router.navigate(['/signup']);
}
addUser(newUser: string){
  this.users.push(newUser);
  for(let i = 0; i < this.users.length; i++){
    console.log(this.users[i]);
  }
}

}
