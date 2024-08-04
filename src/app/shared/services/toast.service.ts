import { Injectable } from '@angular/core';
import { Toast } from '../interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  showDefault(header: string, body: string) {
    this.toasts.push({ header, body });
    //console.log(this.toasts)
  }
  showSuccess(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-success text-light' });
    //console.log(this.toasts)
  }
  showError(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-danger text-light' });
    //console.log(this.toasts)
  }
  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
