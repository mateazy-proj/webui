import { Component } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public title: string = "Lista de partes"
  public buttonOptions: PageHeaderButton = {
    display: false,
    title: "Gerar Relatorio",
    icon: 'bi-file-earmark-pdf'
  };

  eventHandler() {
    console.log('gerando relatorio!')
  }

  filterChanges(formData: any) {
    console.log(formData)
  }

}
