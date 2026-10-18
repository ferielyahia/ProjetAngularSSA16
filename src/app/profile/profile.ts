import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  act = inject(ActivatedRoute);
  title1 = '';

  ngOnInit() {
    this.title1 = this.act.snapshot.data['title'];
  }
}
