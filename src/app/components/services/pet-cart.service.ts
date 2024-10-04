import { Injectable } from '@angular/core';
import { Pet } from '../models/Pet';
import { BehaviorSubject } from 'rxjs';
import { PetDataService } from './pet-data.service';

@Injectable({
  providedIn: 'root'
})
export class PetCartService {
  private _favoriteList: Pet[] = [];

  favoriteList: BehaviorSubject<Pet[]> = new BehaviorSubject<Pet[]>([]);

  constructor(private petDataService: PetDataService) { }

  addToCart(pet: Pet) {
    let item: Pet | undefined = this._favoriteList.find((pet1) => pet1.name === pet.name);
    if (!item) {
      this._favoriteList.push({ ...pet });
    } else {
      this.deleteToCart(pet);
    }
    this.favoriteList.next(this._favoriteList);
  }

  deleteToCart(pet: Pet) {
    let index = this._favoriteList.findIndex((pet1) => pet1.name === pet.name);
    if (index !== -1) {
      this._favoriteList.splice(index, 1);
      this.petDataService.updatePet(pet);
      this.favoriteList.next(this._favoriteList); 
    } else {
      console.warn("no válido para eliminar.");
    }
  }


}
