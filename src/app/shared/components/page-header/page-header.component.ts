import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageHeaderButton } from '../../interfaces/page-header-button';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() pageTitle: String = 'noti availabou'
  @Input() buttonOptions: PageHeaderButton = { display: false }
  @Output() eventHandler = new EventEmitter();

  triggerAction() {
    this.eventHandler.emit();
  }
}
