import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFeatureCoreModule } from '../../modules/feature-core/feature-core.module';
import { DiagramsFeatureComponent } from './diagrams.component';

const routes: Routes = [
  {
    path: '',
    component: DiagramsFeatureComponent,
  },
];

@NgModule({
  imports: [AppFeatureCoreModule, RouterModule.forChild(routes)],
  declarations: [DiagramsFeatureComponent],
})
export class DiagramsFeatureModule {}
