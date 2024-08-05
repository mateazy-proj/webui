import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ImgUploaderCellComponent } from './list/img-uploader-cell/img-uploader-cell.component';



@NgModule({
  declarations: [
    SearchComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
