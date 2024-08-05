import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageCropperService {
  aspectRatio = 1 / 1;
  defaultHeight = 100;
  defaultWidth = this.defaultHeight * this.aspectRatio

  constructor() { }

  resize(file: File, fileName: string) {
    const reader = new FileReader();
    return new Promise<File>((resolve) => {
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const image = (e.target as FileReader).result;
        if (image) {
          this.resizeImage(image, fileName).then(file => {
            resolve(file)
          })
        }
      };
      reader.readAsDataURL(file);
    })
  }

  resizeImage(imageURL: any, fileName: string): Promise<File> {
    const mimeString = 'image/jpeg';
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
          const imageOutput = canvas.toDataURL(mimeString, 1)
          /* const imgBlob = this.base64ToBlob(imageOutput, mime)
          const file = this.blobToFile(imgBlob, fileName); */
          // Remove the base64 prefix (data:image/png;base64,)
          const byteString = atob(imageOutput.split(',')[1]);


          // Create an array buffer and a view (Uint8Array) of the binary data
          const arrayBuffer = new ArrayBuffer(byteString.length);
          const uint8Array = new Uint8Array(arrayBuffer);
          for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
          }

          // Create a file from the array buffer
          const blob = new Blob([arrayBuffer], { type: mimeString });
          const file = new File([blob], fileName, { type: blob.type });
          resolve(file);
        }
      };
      image.src = imageURL;
    });
  }
}
