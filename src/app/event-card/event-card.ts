import { Component, input, output } from '@angular/core';
import { Event } from '../models/event';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {

  event = input.required<Event>();
  isFavorite = input<boolean>(false);

  favoriteChange = output<number>();
  delete = output<number>();

  toggleFavorite(): void {
    this.favoriteChange.emit(this.event().id);
  }

  deleteEvent(): void {
    this.delete.emit(this.event().id);
  }
}
