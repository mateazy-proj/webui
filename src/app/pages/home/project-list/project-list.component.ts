import { Component } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects: Project[] = [
    {
      name: 'Project 1',
      description: 'This is a project description',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      link: 'XXXXXXXXXXXXXXXXXXXXXX'
    },
    {
      name: 'Project 2',
      description: 'This is a project description',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      link: 'XXXXXXXXXXXXXXXXXXXXXX'
    },
    {
      name: 'Project 3',
      description: 'This is a project description',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      link: 'XXXXXXXXXXXXXXXXXXXXXX'
    }
  ]
}
