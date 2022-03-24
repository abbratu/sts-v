import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandyShopComponent } from './candy-shop.component';
import { CandyShopRoutingModule } from './candy-shop-routing.module';
import { AppUxCoreModule } from 'projects/sts-v-app/src/libs/ux-core.module';

@NgModule({
  imports: [
    CommonModule,
    CandyShopRoutingModule,
    AppUxCoreModule
  ],
  declarations: [CandyShopComponent]
})
export class CandyShopModule { }