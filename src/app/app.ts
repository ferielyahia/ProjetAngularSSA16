import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Server } from './server/server';
import { Servers } from './servers/servers';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Server, Servers, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo-ssa16');
}
