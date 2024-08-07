import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ImageCropperService } from '../../../../shared/services/image-cropper.service';
import { ListItem } from '../../../../shared/interfaces/list-item';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-img-uploader-cell',
  templateUrl: './img-uploader-cell.component.html',
  styleUrl: './img-uploader-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgUploaderCellComponent {
  @ViewChild('dropArea') dropArea!: ElementRef
  @Input() item!: ListItem
  @Output() selectedItem: EventEmitter<ListItem> = new EventEmitter<ListItem>()
  @Output() imageFile: EventEmitter<File> = new EventEmitter<File>()

  imageChangedEvent: Event | null = null;
  /* List of image types to be accepted on the application */
  acceptedImageType = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp', 'image/tiff']
  constructor(private imageCropService: ImageCropperService, private toastService: ToastService, private cdRef: ChangeDetectorRef) {

  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Add visual feedback for user
    this.dropArea.nativeElement.classList.add('bg-primary-subtle')
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Optional: Remove visual feedback for user
    this.dropArea.nativeElement.classList.remove('bg-primary-subtle')
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropArea.nativeElement.classList.remove('bg-primary-subtle')
    const file = event.dataTransfer?.files[0];
    if (file && this.acceptedImageType.includes(file.type)) {
      this.toastService.showSuccess('Sucesso', 'Imagem carregada');

      this.imageCropService.resize(file, this.item.sanitizedDescription).then((imgFile: File) => {
        //this.replaceItem(image)
        this.selectedItem.emit(this.item)
        this.imageFile.emit(imgFile)
        this.cdRef.detectChanges()
      });
    } else {
      this.toastService.showError('Erro ao carregar arquivo', 'Apenas imagens serão processadas');
    }

  }
}
