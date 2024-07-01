import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefugioPatitasAdoptComponent } from './components/refugio-patitas-adopt/refugio-patitas-adopt.component';
import { RefugioPatitasHomeComponent } from './components/refugio-patitas-home/refugio-patitas-home.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
