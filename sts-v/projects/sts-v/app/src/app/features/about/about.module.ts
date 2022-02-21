import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFeatureComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutFeatureComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AboutFeatureComponent],
})
export class AboutFeatureModule {}
