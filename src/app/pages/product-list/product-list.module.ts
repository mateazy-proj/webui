import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';



@NgModule({
  declarations: [
    ViewComponent,
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
