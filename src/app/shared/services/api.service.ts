import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../interfaces/list-item';
import { SortColumn, SortDirection } from '../directives/sort-event.directive';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getList(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>('assets/items.json')
  }



}
