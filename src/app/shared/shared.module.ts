import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbdSortableHeader } from './directives/sort-event.directive';



@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    NgbdSortableHeader
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
