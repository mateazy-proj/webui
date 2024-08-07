import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UploadProjectComponent } from './upload-project/upload-project.component';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectListComponent,
    UploadProjectComponent,

  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }
