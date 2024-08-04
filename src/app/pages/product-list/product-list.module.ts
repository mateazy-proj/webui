import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';



@NgModule({
  declarations: [
    SearchComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
