import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefugioPatitasAdoptComponent } from './components/pages/refugio-patitas-adopt/refugio-patitas-adopt.component';
import { RefugioPatitasHomeComponent } from './components/pages/refugio-patitas-home/refugio-patitas-home.component';
import { CartComponent } from './components/pages/cart/cart.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: RefugioPatitasHomeComponent
  },
  {
    path: "adopt",
    component: RefugioPatitasAdoptComponent
  },
  {
    path: "favorites",
    component: CartComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
