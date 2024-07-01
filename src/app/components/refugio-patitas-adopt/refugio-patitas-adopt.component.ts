import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetCartService } from '../services/pet-cart.service';
import { PetDataService } from '../services/pet-data.service';

@Component({
  selector: 'refugio-patitas-adopt',
  templateUrl: './refugio-patitas-adopt.component.html',
  styleUrls: ['./refugio-patitas-adopt.component.scss']
})
export class RefugioPatitasAdoptComponent implements OnChanges {

  arrPets: Pet[] = [];
  arrFavoritesPets: Pet[] = [];

  constructor(private cart: PetCartService, private petDataService: PetDataService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.petDataService.getAll()
      .subscribe(pets => {
        this.arrPets = pets;

      });
  }

  addToCart(pet: Pet): void {
    this.cart.addToCart(pet);
  }
}
