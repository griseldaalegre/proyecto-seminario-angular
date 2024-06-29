import { Component } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetCartService } from '../services/pet-cart.service';
import { PetDataService } from '../services/pet-data.service';

@Component({
  selector: 'refugio-patitas-adopt',
  templateUrl: './refugio-patitas-adopt.component.html',
  styleUrls: ['./refugio-patitas-adopt.component.scss']
})
export class RefugioPatitasAdoptComponent {

  arrPets: Pet[] = [];

  arrFavoritesPets: Pet[] = [];

  constructor(private cart: PetCartService, private petDataService: PetDataService) {
  }

  ngOnInit(): void {
    this.petDataService.getAll()//devuelve un observable
      .subscribe(pets => this.arrPets = pets); //mi arr de pet se convierte en el qeu viene del servicio
  }

  addToCart(pet: Pet): void {
    this.cart.addToCart(pet);
  }
}
