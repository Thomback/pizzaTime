import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaDetailsPage } from './pizza-details.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaDetailsPageRoutingModule {}
