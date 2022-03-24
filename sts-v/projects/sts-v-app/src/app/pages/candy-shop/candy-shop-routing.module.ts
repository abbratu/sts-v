import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandyShopComponent } from './candy-shop.component';


const routes: Routes = [
  {
    path: '',
    component: CandyShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandyShopRoutingModule { }