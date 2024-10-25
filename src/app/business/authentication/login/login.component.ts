import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: () => this.router.navigate(['./dashboard']),
      error: (err) => console.error('Login failed', err)
    })
  }

}
