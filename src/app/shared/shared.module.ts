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



@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
    ListComponent,
    ToastComponent,
    NgbdSortableHeader
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
    ListComponent,
    ToastComponent,
    ReactiveFormsModule,
    HttpClientModule,
    NgbdSortableHeader,
  ],
  providers: [
    ApiService,
    ToastService
  ]
})
export class SharedModule { }
