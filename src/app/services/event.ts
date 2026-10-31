
import { Injectable, signal, computed } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // Liste des événements
  private _events = signal<Event[]>([
    {
      id: 1,
      title: 'Angular Workshop',
      category: 'Atelier',
      date: '2026-11-15',
      place: 'ESPRIT',
      price: 0,
      description: 'Un atelier pratique pour apprendre Angular.'
    },
    {
      id: 2,
      title: 'AI Conference',
      category: 'Conférence',
      date: '2026-11-20',
      place: 'Tunis',
      price: 25,
      description: 'Une conférence dédiée à l’intelligence artificielle.'
    },
    {
      id: 3,
      title: 'Football Tournament',
      category: 'Sport',
      date: '2026-11-25',
      place: 'Ariana',
      price: 10,
      description: 'Un tournoi sportif ouvert aux étudiants.'
    },
    {
      id: 4,
      title: 'Web Development',
      category: 'Atelier',
      date: '2026-12-01',
      place: 'ESPRIT',
      price: 15,
      description: 'Découverte des technologies modernes du Web.'
    },
    {
      id: 5,
      title: 'Tech Innovation',
      category: 'Conférence',
      date: '2026-12-05',
      place: 'Tunis',
      price: 0,
      description: 'Découvrez les nouvelles tendances technologiques.'
    },
    {
      id: 6,
      title: 'Basketball Day',
      category: 'Sport',
      date: '2026-12-10',
      place: 'La Marsa',
      price: 5,
      description: 'Une journée de compétition de basketball.'
    }
  ]);

  // Liste des favoris
  private _favorites = signal<number[]>([]);

  // Signaux en lecture seule
  events = this._events.asReadonly();
  favorites = this._favorites.asReadonly();

  // Compteurs automatiques
  eventCount = computed(() => this._events().length);

  favoriteCount = computed(() => this._favorites().length);

  freeEventCount = computed(() =>
    this._events().filter(event => event.price === 0).length
  );

  // Rechercher un événement par ID
  getEventById(id: number): Event | undefined {
    return this._events().find(event => event.id === id);
  }

  // Ajouter un événement
  addEvent(event: Omit<Event, 'id'>): void {
    const newEvent: Event = {
      ...event,
      id: Math.max(0, ...this._events().map(e => e.id)) + 1
    };

    this._events.update(events => [...events, newEvent]);
  }

  // Supprimer un événement
  deleteEvent(id: number): void {
    this._events.update(events =>
      events.filter(event => event.id !== id)
    );

    this._favorites.update(favorites =>
      favorites.filter(favoriteId => favoriteId !== id)
    );
  }

  // Ajouter ou retirer un favori
  toggleFavorite(id: number): void {
    this._favorites.update(favorites =>
      favorites.includes(id)
        ? favorites.filter(favoriteId => favoriteId !== id)
        : [...favorites, id]
    );
  }
}
