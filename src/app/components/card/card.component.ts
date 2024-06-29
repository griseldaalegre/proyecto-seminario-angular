import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../models/Pet';


@Component({
  selector: 'rp-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  showMore: boolean = false;
  save: boolean = false;
  textButton: string = "Ver historia";
  textButtonSave: string = "Guardar";
  @Output() changePet = new EventEmitter();
  @Output() changeDeletePet = new EventEmitter();

  constructor() { }

  @Input()
  pet: Pet | undefined; //preguntar si esta bien hacer un arreglo vacio



  toggleShowMore(pet: Pet) {
    // alert("se toco a chicho " + pet.name)
    this.showMore = !this.showMore;
    this.textButton = this.showMore ? "Ocultar historia" : "Ver historia";
  }

}

