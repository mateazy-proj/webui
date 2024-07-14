import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    PageHeaderComponent,
    WrapperComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
