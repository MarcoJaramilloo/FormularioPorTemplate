import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(@Inject(DOCUMENT) public document: Document, private router: Router,public auth: AuthService) {}


  goToTemplate() {
    this.router.navigate(['/template']);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }
}

