import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule, NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbdSortableHeader } from './directives/sort-event.directive';
import { ListComponent } from '../pages/product-list/list/list.component';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { ViewComponent } from '../pages/product-list/view/view.component';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ImageCropperService } from './services/image-cropper.service';
import { ImgUploaderCellComponent } from '../pages/product-list/list/img-uploader-cell/img-uploader-cell.component';


@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
    ViewComponent,
    ToastComponent,
    ListComponent,
    ImgUploaderCellComponent,
    NgbdSortableHeader
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    ImageCropperComponent,
  ],
  exports: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
    ToastComponent,
    ViewComponent,
    ListComponent,
    ReactiveFormsModule,
    HttpClientModule,
    NgbdSortableHeader,
    ImageCropperComponent,
    ImgUploaderCellComponent,
  ],
  providers: [
    ApiService,
    ToastService,
    ImageCropperService,
    DatePipe
  ]
})
export class SharedModule { }
