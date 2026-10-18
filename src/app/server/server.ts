import { Component, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, isActive } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-server',
  imports: [FormsModule, NgClass, NgStyle],
  standalone: true,
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class Server {
  serverID = signal(10);
  serverStatus = signal('offline');
  allowServerCreation = signal(false);
  serverCreationStatus = signal('noServer');
  serverName = signal('Server 1');
  serverCreation = signal(false);
  servers = signal(['Server1', 'Server2']);

  isActive = signal(true);
  isDisabled = signal(false);

  textColor = signal('blue');
  fontSize = signal(21);

  name = input<string>();
  deleteServer = output<string>();
  status = model('offline');

  act = inject(ActivatedRoute);

  toggleStatus() {
    this.status.update((s) => (s === 'online' ? 'offline' : 'online'));
  }

  getStatus() {
    return this.serverStatus();
  }

  onServerCreation() {
    this.serverCreationStatus.set('serverCreated');
    this.serverCreation.set(true);
    this.servers.update((list) => [...list, this.serverName()]);
  }

  toggleActive() {
    this.isActive.update((value) => !value);
  }

  toggleDisable() {
    this.isDisabled.update((value) => !value);
  }

  onDelete() {
    this.deleteServer.emit(<string>this.name());
  }

  // constructor(private act : ActivatedRoute) {
  // }

  ngOnInit() {}
}
