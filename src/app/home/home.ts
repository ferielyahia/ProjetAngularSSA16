import { Component, inject } from '@angular/core';
import { isActive, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router = inject(Router);
  isHomeActive = isActive('/home', this.router);
}
