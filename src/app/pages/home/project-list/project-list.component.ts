import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import { ListItem, projectData } from '../../../shared/interfaces/list-item';
import { ImageList } from '../../../shared/interfaces/image-list';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

export interface uploadingData {
  total: number;
  current: number;
  isUploading: boolean;
}
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input() projectData!: projectData;
  @Input() uploading: uploadingData = { total: 0, current: 0, isUploading: false };
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() imageListChange: EventEmitter<ImageList[]> = new EventEmitter<ImageList[]>()
  projects: Project[] = []
  displayItem = ''

  constructor(config: NgbProgressbarConfig) {
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  progressBarStyle() {
    return {
      'width': ((this.uploading.current / this.uploading.total) * 100) + '%'
    }
  }

  listUpdateHandler(event: ListItem) {
    this.updateItem.emit(event)
  }
  updateImageList(event: ImageList[]) {
    this.imageListChange.emit(event)
  }
}
