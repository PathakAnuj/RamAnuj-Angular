import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
 userName: string = 'Ram Anuj Pathak';
  userRole: string = 'Admin';
  userEmail: string = 'nIb0i@example.com';

  constructor(private router: Router) {}

  logout() {
    console.log('User logged out');
    // Implement logout logic here
    this.router.navigate(['/login']);
  }
}
