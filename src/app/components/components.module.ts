import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    SearchComponent,
    CardsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    CardsComponent,
    ProductDetailsComponent
  ]
})
export class ComponentsModule { }
