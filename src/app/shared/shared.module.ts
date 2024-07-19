import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent
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
    ReactiveFormsModule
  ]
})
export class SharedModule { }
