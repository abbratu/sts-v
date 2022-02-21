import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramsFeatureComponent } from './diagrams.component';

const routes: Routes = [
  {
    path: '',
    component: DiagramsFeatureComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DiagramsFeatureComponent],
})
export class DiagramsFeatureModule {}
