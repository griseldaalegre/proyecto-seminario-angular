import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  private URL = 'https://huachitos.cl/api/animales/tipo/perro';
  pets: Pet[] = [];
  cantidad = 6;

  constructor(private http: HttpClient) { }


  getPetFromAPI(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  public getAll(): Observable<Pet[]> {
    console.log(this.pets)
    if (this.pets.length <= 0) {
      this.getPetFromAPI().subscribe(
        response => {
          for (let index = 0; index < this.cantidad; index++) {

            let pet: Pet = {
              name: response.data[index].nombre,
              age: response.data[index].edad,
              gender: response.data[index].genero,
              img: response.data[index].imagen,
              favorite: false,
              history: response.data[index].desc_adicional,
            }

            this.pets.push(pet);
          }
        }
      )
    }
    return of(this.pets);
  }

  removeFavorite(pet: Pet) {
    let index = this.pets.findIndex((pet1) => pet1.name === pet.name);
    if (index !== -1) {
      this.pets[index].favorite = false;
    }
  }

  public updatePet(pet: Pet) {

    let index = this.pets.findIndex((pet1) => pet1.name === pet.name);
    this.pets[index].favorite = false;

  }

}
