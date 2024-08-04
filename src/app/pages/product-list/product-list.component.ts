import { Component } from '@angular/core';
import { PageHeaderButton } from '../../shared/interfaces/page-header-button';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ListItem } from '../../shared/interfaces/list-item';

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
  public list: ListItem[] = []

  constructor(
    private api: ApiService
  ) {
    this.api.getList().subscribe({
      next: (res) => {
        this.list = res
      },
      error: (err) => {
        //console.error(err)
      }
    })
  }

  eventHandler() {
    console.log('gerando relatorio!')
  }

  filterChanges(formData: any) {
    console.log(formData)
  }

}
