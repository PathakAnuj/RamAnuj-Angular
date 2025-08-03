import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-dashbord',
  imports: [NavBar],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css'
})
export class Dashbord {
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
