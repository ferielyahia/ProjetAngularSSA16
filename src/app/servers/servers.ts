import { Component, signal } from '@angular/core';
import { Server } from '../server/server';

@Component({
  selector: 'app-servers',
  imports: [Server],
  standalone: true,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers {
  serverName = signal('Server Parent');
  serverStatus = signal('offline');
  onDeleteServer(name: string) {
    console.log('Serveur supprimé :', name);
  }
}
