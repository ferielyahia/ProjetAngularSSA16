import { Component, input, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //user!: { id: number; name: string };
  // constructor(private act: ActivatedRoute) {}
  //
  // ngOnInit() {
  //   this.user = {
  //     id : this.act.snapshot.params['id'],
  //     name : this.act.snapshot.params['name']
  //   }
  // }
  //id = input<number>();
 // name = input<string>();
 private route = inject(ActivatedRoute);
 
  paramMapSignal=toSignal(this.route.paramMap);
  id= computed(() => this.paramMapSignal()?.get('id'));
}
