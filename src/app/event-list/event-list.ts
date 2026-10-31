import { Component, inject } from '@angular/core';
import { EventService } from '../services/event';
import { EventCard } from '../event-card/event-card';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {

  private eventService = inject(EventService);

  events = this.eventService.events;
  favorites = this.eventService.favorites;

  eventCount = this.eventService.eventCount;
  favoriteCount = this.eventService.favoriteCount;
  freeEventCount = this.eventService.freeEventCount;

  toggleFavorite(id: number): void {
    this.eventService.toggleFavorite(id);
  }

  deleteEvent(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet événement ?')) {
      this.eventService.deleteEvent(id);
    }
  }
}
