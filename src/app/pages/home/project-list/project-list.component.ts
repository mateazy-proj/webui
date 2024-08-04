import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import { ListItem, projectData } from '../../../shared/interfaces/list-item';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input() projectData!: projectData;
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  projects: Project[] = []

  listUpdateHandler(event: ListItem) {
    this.updateItem.emit(event)
  }
}
