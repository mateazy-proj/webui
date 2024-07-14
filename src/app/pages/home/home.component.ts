import { Component } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public buttonOptions: PageHeaderButton = {
    display: false,
    title: "test tests"
  }

  eventHandler() {
  }
}
