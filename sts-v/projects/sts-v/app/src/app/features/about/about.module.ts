import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFeatureCoreModule } from '../../modules/feature-core/feature-core.module';
import { AboutFeatureComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutFeatureComponent,
  },
];

@NgModule({
  imports: [AppFeatureCoreModule, RouterModule.forChild(routes)],
  declarations: [AboutFeatureComponent],
})
export class AboutFeatureModule {}
