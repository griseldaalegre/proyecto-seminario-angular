import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetCartService } from '../services/pet-cart.service';

@Component({
  selector: 'rp-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrl: './card-favorite.component.scss'
})
export class CardFavoriteComponent {
  @Input() pet: Pet | undefined;


  constructor(private cartService: PetCartService) { } // inyecto el servicio

  deleteToCart(pet: any) { //uso el delete del servicio-preguntar
    alert("Entre al delete de favCard");
    this.cartService.deleteToCart(pet); // llamo al delete servicio con la mascota
  }
}

