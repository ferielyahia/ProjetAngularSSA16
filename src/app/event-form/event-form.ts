
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { EventService } from '../services/event';
import { Event } from '../models/event';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
  private eventService = inject(EventService);
  private router = inject(Router);

  // Création du formulaire réactif
  eventForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),

    category: new FormControl<Event['category'] | null>(null, Validators.required),

    date: new FormControl('', Validators.required),

    place: new FormControl('', [Validators.required, Validators.minLength(3)]),

    price: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),

    imageUrl: new FormControl(''),

    description: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });

  // Conversion des Observables en Signals
  formValue = toSignal(this.eventForm.valueChanges, {
    initialValue: this.eventForm.value,
  });

  formStatus = toSignal(this.eventForm.statusChanges, {
    initialValue: this.eventForm.status,
  });

  // Vérifier les erreurs
  hasError(controlName: string, error: string): boolean {
    const control = this.eventForm.get(controlName);
    return !!control && control.hasError(error) && control.touched;
  }

  // Ajouter un événement
  addEvent(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const value = this.eventForm.getRawValue();

    this.eventService.addEvent({
      title: value.title!,
      category: value.category!,
      date: value.date!,
      place: value.place!,
      price: value.price!,
      imageUrl: value.imageUrl || undefined,
      description: value.description!,
    });

    this.eventForm.reset();

    this.router.navigate(['/events']);
  }
}
