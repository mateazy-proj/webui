import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CloudinaryModule } from '@cloudinary/ng';



@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
    ViewComponent,
    ToastComponent,
    ListComponent,
    NgbdSortableHeader
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    CloudinaryModule,
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
    CloudinaryModule,
    NgbdSortableHeader,
    ImageCropperComponent,
  ],
  providers: [
    ApiService,
    ToastService
  ]
})
export class SharedModule { }
