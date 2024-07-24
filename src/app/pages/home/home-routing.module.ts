import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { UploadProjectComponent } from './upload-project/upload-project.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'project-list',
                component: ProjectListComponent,
            }/* ,
            {
                path: 'upload-project',
                component: UploadProjectComponent,
            } */
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }