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


  constructor(private cartService: PetCartService) { } 

 deleteToCart(pet: Pet) { 
    this.cartService.deleteToCart(pet); 
  }
}

