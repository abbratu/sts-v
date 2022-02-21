import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFeatureCoreModule } from '../../modules/feature-core/feature-core.module';
import { HomeFeatureComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFeatureComponent,
  },
];

@NgModule({
  imports: [AppFeatureCoreModule, RouterModule.forChild(routes)],
  declarations: [HomeFeatureComponent],
})
export class HomeFeatureModule {}
