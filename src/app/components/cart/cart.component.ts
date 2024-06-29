import { Component, OnInit } from '@angular/core';
import { PetCartService } from '../services/pet-cart.service';
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'rp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //declaro un Observable
  favoriteList$: Observable<Pet[]>;

  constructor(private cart: PetCartService) {
    this.favoriteList$ = cart.favoriteList.asObservable();
  }

  ngOnInit(): void {
  }
}
