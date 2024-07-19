import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: ':id',
        component: ProductListComponent
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductListRoutingModule { }