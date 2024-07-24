import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ListItem } from '../../../shared/interfaces/list-item';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sort-event.directive';
import { ApiService } from '../../../shared/services/api.service';
import * as _ from "lodash"
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-product-list-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  @Input() listData!: ListItem[]
  @Output() selection = new EventEmitter<ListItem>();
  showToast: boolean = false;
  toastContent = {
    header: 'Success',
    body: 'Product added successfully'
  }

  constructor(private api: ApiService, private toastService: ToastService) {

  }

  handleEditClick(item: ListItem) {
    this.selection.emit(item);
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    // resetting other headers
    const newDir = direction === '' ? undefined : direction
    this.listData = _.orderBy(this.listData, column, newDir)
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Add visual feedback for user
    document.getElementById('drop-area')?.classList.add('highlight');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Remove visual feedback for user
    document.getElementById('drop-area')?.classList.remove('highlight');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Remove visual feedback for user
    document.getElementById('drop-area')?.classList.remove('highlight');

    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }

  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Example: Perform file upload or processing
      console.log('File dropped:', file.name, file.type);
      if (file.type !== 'text/csv') {
        this.toastContent = {
          header: 'Erro ao carregar arquivo',
          body: 'Apenas arquivos CSV serao processados'
        }
        this.toastService.showError(this.toastContent.header, this.toastContent.body);
        console.log(`nao`)
      } else {
        this.toastService.showSuccess(this.toastContent.header, this.toastContent.body);
      }
    }
  }


}
