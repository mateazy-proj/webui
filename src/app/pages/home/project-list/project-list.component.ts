import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import { projectData } from '../../../shared/interfaces/list-item';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input() projectData!: projectData
  projects: Project[] = []
}
