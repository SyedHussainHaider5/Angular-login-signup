import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username: any;
password: any;
constructor(private router: Router) {}

navigateToLogin() {
  this.router.navigate(['/login']); // Navigate to the login route
}
onButtonClick() {
  // Navigate to the desired path when the button is clicked
  this.router.navigate(['/signup']); // Replace 'other-path' with the path you want to navigate to
}


}
