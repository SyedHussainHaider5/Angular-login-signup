import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
username: any;
password: any;
cpassword: any;
constructor(private router: Router) {}

navigateToSignup() {
  this.router.navigate(['/signup']); // Navigate to the login route
}



}
