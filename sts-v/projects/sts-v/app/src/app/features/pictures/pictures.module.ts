import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturesFeatureComponent } from './pictures.component';

const routes: Routes = [
  {
    path: '',
    component: PicturesFeatureComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PicturesFeatureComponent],
})
export class PicturesFeatureModule {}
