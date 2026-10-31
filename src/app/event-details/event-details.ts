
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../services/event';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {

  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  event = this.eventService.getEventById(this.id);
}
