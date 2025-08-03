import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}

  onSubmit() {
    // Add authentication logic here if needed
    console.log('Login form submitted');
    
    this.router.navigate(['/dashbord']);
  }
}
