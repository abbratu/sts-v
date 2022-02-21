import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFeatureCoreModule } from '../../modules/feature-core/feature-core.module';
import { PicturesFeatureComponent } from './pictures.component';

const routes: Routes = [
  {
    path: '',
    component: PicturesFeatureComponent,
  },
];

@NgModule({
  imports: [AppFeatureCoreModule, RouterModule.forChild(routes)],
  declarations: [PicturesFeatureComponent],
})
export class PicturesFeatureModule {}
