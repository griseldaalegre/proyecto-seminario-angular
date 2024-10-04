import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardFavoriteComponent } from './components/card-favorite/card-favorite.component';
import { RefugioPatitasAdoptComponent } from './components/pages/refugio-patitas-adopt/refugio-patitas-adopt.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { RefugioPatitasHomeComponent } from './components/pages/refugio-patitas-home/refugio-patitas-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFavoriteComponent,
    RefugioPatitasAdoptComponent,
    CartComponent,
    CarouselHomeComponent,
    RefugioPatitasHomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
