import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {}
