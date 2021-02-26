import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/'
}, {
  path: 'items/:search',
  component: CardsComponent,
}, {
  path: 'detail/:id',
  component: ProductDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
