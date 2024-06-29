import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../models/Pet';


@Component({
  selector: 'rp-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  showMore: boolean = false;
  textButton: string = "Ver historia";
  textButtonSave: string = "Guardar";

  @Output() changePet = new EventEmitter();

  constructor() { }

  @Input()
  pet: Pet | undefined;

  toggleShowMore(pet: Pet) {
    this.showMore = !this.showMore;
    this.textButton = this.showMore ? "Ocultar historia" : "Ver historia";
  }

  toggleFavorite(): void {
    if (this.pet?.favorite) {
      this.pet.favorite = !this.pet.favorite;
      this.textButtonSave = this.showMore ? "Quitar" : "Guardar";
    }
  }

}

