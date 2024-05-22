import { Component } from '@angular/core';
import { Pet } from '../models/Pet';


@Component({
  selector: 'rp-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  arrPets: Pet[] = [
    {
      name: 'Chicho',
      age: 1,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    },
    {
      name: 'Chicho',
      age: 2,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    },
    {
      name: 'Chicho',
      age: 2,
      breed: 'Mestizo',
      dateOfBirth: '18/05/23',
      img: 'assets/img/img-card.jpeg',
      favorite: false
    }

  ]

  showMore: boolean = false;
  save: boolean = false;
  textButton: string = "Ver historia";
  textButtonSave: string = "Guardar";
  constructor() { }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.textButton = this.showMore ? "Ocultar historia" : "Ver historia";
  }

  saveFovorite (pet: Pet ): void {
    this.save = !this.save;
    console.log(pet);
    this.textButtonSave = this.save ? "Favorito" : "Guardar";
  }
}

