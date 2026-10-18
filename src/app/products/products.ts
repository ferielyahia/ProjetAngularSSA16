import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private route = inject (ActivatedRoute);

queryparamMapSignal = toSignal(this.route.queryParamMap);
search = computed(() => this.queryparamMapSignal()?.get('search'));

}
