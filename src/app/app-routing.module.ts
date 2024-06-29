import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefugioPatitasAdoptComponent } from './components/refugio-patitas-adopt/refugio-patitas-adopt.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
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
