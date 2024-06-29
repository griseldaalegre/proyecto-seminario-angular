import { Injectable } from '@angular/core';
import { Pet } from '../models/Pet';
import { BehaviorSubject } from 'rxjs';
// maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})
export class PetCartService {
  private _favoriteList: Pet[] = []; // Arreglo privado para guardar la lista de favoritos

  favoriteList: BehaviorSubject<Pet[]> = new BehaviorSubject<Pet[]>([]); // BehaviorSubject inicializado con _favoriteList

  addToCart(pet: Pet) {
    let item: Pet | undefined = this._favoriteList.find((pet1) => pet1.name === pet.name);
    if (!item) {
      this._favoriteList.push({ ...pet });
      console.log("entro al if: " + this._favoriteList.length);
      console.log(this.favoriteList);
    } else {
      this.deleteToCart(pet);
    }
    this.favoriteList.next(this._favoriteList);
  }
  
  //ACOMODAR ESTE CODIGO
  deleteToCart(pet: Pet) {
    let index = this._favoriteList.findIndex((pet1) => pet1.name === pet.name);
    if (index !== -1) {
      this._favoriteList[index].favorite = false;
      this._favoriteList.splice(index, 1);
      console.log("funcion delete: " + this._favoriteList.length);
      console.log(this._favoriteList);
    } else {
      console.warn(`Índice ${index} no válido para eliminar.`);
    }
  }
  constructor() { }
}
