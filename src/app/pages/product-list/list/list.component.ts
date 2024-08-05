import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ListItem } from '../../../shared/interfaces/list-item';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sort-event.directive';
import { ApiService } from '../../../shared/services/api.service';
import { ToastService } from '../../../shared/services/toast.service';
import * as _ from 'lodash';
import { ImageCropperService } from '../../../shared/services/image-cropper.service';

@Component({
  selector: 'app-product-list-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  @Input() listData!: ListItem[]
  @Output() selection: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  showToast: boolean = false;


  selectedItem!: ListItem

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

  setSelectedItem(event: ListItem) {
    this.selectedItem = event
  }

  postFileToCloudinary(file: File) {
    console.log(`called `, file.name)
    this.api.uploadimage(file).subscribe({
      next: (res) => {
        //console.log(res.url)
        this.replaceItem(res.url)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }


  /* // Example usage
  const base64Image = 'data:image/png;base64,iVBORw0...'; // Your base64 string here
  const blob = base64ToBlob(base64Image, 'image/png'); */

  replaceItem(image: any) {

    this.selectedItem.imageUrl = image
    this.updateItem.emit(this.selectedItem)
  }


}


