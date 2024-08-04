import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageCropperService {
  aspectRatio = 1 / 1;
  defaultHeight = 100;
  defaultWidth = this.defaultHeight * this.aspectRatio

  constructor() { }

  resize(file: File) {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const image = (e.target as FileReader).result;
        if (image) {
          this.resizeImage(image).then((image: string | ArrayBuffer | null) => {
            resolve(image)
          })
        }
      };
      reader.readAsDataURL(file);
    })
  }
  resizeImage(imageURL: any): Promise<any> {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');

        if (ctx != null) {
          const originalWidth = image.width;
          const originalHeight = image.height;
          const aspectRatio = originalWidth / originalHeight;

          let newWidth, newHeight;
          if (originalWidth > originalHeight) {
            // Landscape or square image
            newHeight = 100;
            newWidth = newHeight * aspectRatio;
          } else {
            // Portrait image
            newWidth = 100;
            newHeight = newWidth / aspectRatio;
          }

          const offsetX = (100 - newWidth) / 2;
          const offsetY = (100 - newHeight) / 2;

          ctx.drawImage(image, offsetX, offsetY, newWidth, newHeight);

          resolve(canvas.toDataURL('image/jpeg', 1));
        }
      };
      image.src = imageURL;
    });
  }
}
