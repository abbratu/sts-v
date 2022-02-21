import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeatureComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFeatureComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeFeatureComponent],
})
export class HomeFeatureModule {}
