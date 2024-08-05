import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCropperService } from '../../../../shared/services/image-cropper.service';
import { ListItem } from '../../../../shared/interfaces/list-item';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-img-uploader-cell',
  templateUrl: './img-uploader-cell.component.html',
  styleUrl: './img-uploader-cell.component.scss'
})
export class ImgUploaderCellComponent {
  @Input() item!: ListItem
  @Output() selectedItem: EventEmitter<ListItem> = new EventEmitter<ListItem>()
  @Output() imageFile: EventEmitter<File> = new EventEmitter<File>()

  imageChangedEvent: Event | null = null;
  /* List of image types to be accepted on the application */
  acceptedImageType = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp', 'image/tiff']
  constructor(private imageCropService: ImageCropperService, private toastService: ToastService) {

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
    document.getElementById('drop-area')?.classList.remove('highlight');

    const file = event.dataTransfer?.files[0];
    if (file && this.acceptedImageType.includes(file.type)) {
      this.toastService.showSuccess('Sucesso', 'Imagem carregada');

      this.imageCropService.resize(file, this.item.description).then((imgFile: File) => {
        //this.replaceItem(image)
        this.selectedItem.emit(this.item)
        this.imageFile.emit(imgFile)
      });
    } else {
      this.toastService.showError('Erro ao carregar arquivo', 'Apenas imagens serão processadas');
    }

  }
}
