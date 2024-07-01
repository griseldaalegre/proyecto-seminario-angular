import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../models/Pet';
import { PetCartService } from '../services/pet-cart.service';


@Component({
  selector: 'rp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  showMore: boolean = false;
  textButton: string = "Ver historia";
  textButtonSave: string = "Guardar";

  @Output() changePet = new EventEmitter();

  constructor(private petCartService: PetCartService ) { }

  @Input()
  pet: Pet | undefined;

  toggleShowMore(): void {
    this.showMore = !this.showMore;
    this.textButton = this.showMore ? "Ocultar historia" : "Ver historia";
  }

  toggleFavorite(): void {

    this.pet!.favorite = !this.pet!.favorite;
    this.petCartService.addToCart(this.pet!)

 
}
}

