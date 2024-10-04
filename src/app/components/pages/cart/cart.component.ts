import { Component, OnInit } from '@angular/core';
import { PetCartService } from '../../services/pet-cart.service';
import { Pet } from '../../models/Pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'rp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  favoriteList$: Observable<Pet[]>;
  text: string = "Guardados en Favorito"; 

  constructor(private cart: PetCartService) {
    this.favoriteList$ = cart.favoriteList.asObservable();
  }

  ngOnInit(): void {
    this.favoriteList$.subscribe((favorites: Pet[]) => {
      if (favorites.length === 0) {
        this.text = "Aun no has guardado a ninguna Mascota";
      } else {
        this.text = "Guardados en Favorito";
      }
    });
  }
}
