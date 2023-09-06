import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your login component
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
   // Define a route for the login component
  // Add other routes for different components/pages as needed
  // For example:
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'profile', component: ProfileComponent },
  // ...
  // Set a default route (optional)
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
