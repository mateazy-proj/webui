import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { ListItem } from '../../../shared/interfaces/list-item';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sort-event.directive';
import { ApiService } from '../../../shared/services/api.service';
import * as _ from "lodash"

@Component({
  selector: 'app-product-list-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  @Input() listData!: ListItem[]

  constructor(private api: ApiService) {

  }

  handleEditClick(item: ListItem) {

    console.log(item)
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

}
