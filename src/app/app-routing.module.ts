import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pizza-list',
    pathMatch: 'full'
  },
  {
    path: 'pizza-list',
    loadChildren: () => import('./pizza-list/pizza-list.module').then( m => m.PizzaListPageModule)
  },
  {
    path: 'pizza-details',
    loadChildren: () => import('./pizza-details/pizza-details.module').then( m => m.PizzaDetailsPageModule)
  },
  {
    path: 'your-cart',
    loadChildren: () => import('./your-cart/your-cart.module').then( m => m.YourCartPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
