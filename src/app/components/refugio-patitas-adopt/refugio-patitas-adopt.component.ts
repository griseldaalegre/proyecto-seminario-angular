import { Component } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetCartService } from '../services/pet-cart.service';

@Component({
  selector: 'refugio-patitas-adopt',
  templateUrl: './refugio-patitas-adopt.component.html',
  styleUrls: ['./refugio-patitas-adopt.component.scss']
})
export class RefugioPatitasAdoptComponent {

  arrPets: Pet[] = [
    {
      name: '1',
      age: 1,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    },
    {
      name: '2',
      age: 2,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    },
    {
      name: '3',
      age: 2,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    }
  ];

  arrFavoritesPets: Pet[] = [];

  constructor(private cart: PetCartService) {

  }

  /*
  esto ahora lo hace el servicio
  saveFavorite(pet: Pet): void {

    this.arrFavoritesPets.push(pet);
    console.log("Se guardo" + pet.name);

  }*/ /*
  deleteFavorite($event: Pet) {
    const index = this.arrFavoritesPets.findIndex(pet => pet.name === $event.name);
    if (index !== -1) {
      this.arrFavoritesPets.splice(index, 1);
    }
  }*/
/*
  remove(index: number) {
    const indexPet = this.arrPets.findIndex(pet => pet.name === this.arrFavoritesPets[index].name);
    this.arrPets[indexPet].favorite = false;
    this.arrFavoritesPets.splice(index, 1);
  }
  //seria mi controller -tiene los eventos

*/
  addToCart(pet: Pet): void {
    this.cart.addToCart(pet);
  }
}
