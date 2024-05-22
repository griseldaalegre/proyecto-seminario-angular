import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FavoritePetsListComponent } from './components/favorite-pets-list/favorite-pets-list.component';
import { RefugioPatitasAdoptComponent } from './components/refugio-patitas-adopt/refugio-patitas-adopt.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FavoritePetsListComponent,
    RefugioPatitasAdoptComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
