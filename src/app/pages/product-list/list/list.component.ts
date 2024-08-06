import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ListItem } from '../../../shared/interfaces/list-item';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sort-event.directive';
import { ApiService } from '../../../shared/services/api.service';
import { ToastService } from '../../../shared/services/toast.service';
import * as _ from 'lodash';
import { ImageCropperService } from '../../../shared/services/image-cropper.service';
import { ImageList } from '../../../shared/interfaces/image-list';

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
  @Output() imageListChange: EventEmitter<ImageList[]> = new EventEmitter<ImageList[]>()
  showToast: boolean = false;
  imageList!: ImageList[]


  selectedItem!: ListItem

  constructor(private imageCropperService: ImageCropperService) {
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

  addFileToList(file: File) {
    const list: ImageList = {
      imageFile: file,
      itemName: this.selectedItem.description
    }

    if (!_.some(this.imageList, { itemName: list.itemName })) {
      this.imageList.push(list);
    } else {
      const index = _.findIndex(this.imageList, { itemName: list.itemName });

      // Update the item
      if (index !== -1) {
        this.imageList[index].imageFile = file;
      }
    }

    this.imageListChange.emit(this.imageList)
  }

  postFileToCloudinary(file: File) {
    this.replaceItem(file)
    this.addFileToList(file)
    /* this.api.uploadimage(file).subscribe({
      next: (res) => {
        //console.log(res.url)
        this.replaceItem(res.url)
      },
      error: (err) => {
        console.log(err)
      },
    }) */
  }


  /* // Example usage
  const base64Image = 'data:image/png;base64,iVBORw0...'; // Your base64 string here
  const blob = base64ToBlob(base64Image, 'image/png'); */

  replaceItem(file: File) {
    this.imageCropperService.convertFileToDataURL(file).then(dataURL => {
      this.selectedItem.imageUrl = dataURL;
      this.updateItem.emit(this.selectedItem)
    }).catch(error => {
      console.error('Error converting file to Data URL:', error);
    });


  }



}


