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
  imageChangedEvent: Event | null = null;
  /* List of image types to be accepted on the application */
  acceptedImageType = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp', 'image/tiff']

  selectedItem!: ListItem

  constructor(private api: ApiService, private toastService: ToastService, private imageCropService: ImageCropperService) {
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

  onDrop(event: DragEvent, item: ListItem) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('drop-area')?.classList.remove('highlight');

    const file = event.dataTransfer?.files[0];
    if (file && this.acceptedImageType.includes(file.type)) {
      this.toastService.showSuccess('Sucesso', 'Imagem carregada');
      this.selectedItem = item
      this.imageCropService.resize(file).then(image => {
        this.replaceItem(image)
      });
    } else {
      this.toastService.showError('Erro ao carregar arquivo', 'Apenas imagens serão processadas');
    }

  }



  replaceItem(image: any) {

    this.selectedItem.imageUrl = image
    this.updateItem.emit(this.selectedItem)
  }

  updateImageOnCloudinary(image: any) {
    let data = new FormData
    data.append('file', image);
    data.append('upload_preset', 'Upload presets name here');
    data.append('cloud_name', 'copy from dashboard')
    data.append('public_id', file Name + todaysDate)
  }

}


