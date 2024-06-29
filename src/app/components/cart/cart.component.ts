import { Component, OnInit } from '@angular/core';
import { PetCartService } from '../services/pet-cart.service';
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs'; // Corregido, solo importa Observable desde RxJS

@Component({
  selector: 'rp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'] // Corregido, usa styleUrls en lugar de styleUrl
})
export class CartComponent implements OnInit {

//declaro un Observable para una lista de mascotas favoritas
favoriteList$: Observable<Pet[]>;

constructor(private cart: PetCartService) {
    // convierte la lista de favoritos del carrito en un Observable de solo lectura - preguntar
    this.favoriteList$ = cart.favoriteList.asObservable();
}


  ngOnInit(): void {

  }
}
