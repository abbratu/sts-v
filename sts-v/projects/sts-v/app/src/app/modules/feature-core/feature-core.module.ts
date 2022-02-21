import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppFeaturePageComponent } from './components/feature-page/app-feature-page.component';

@NgModule({
  declarations: [AppFeaturePageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    CommonModule, 
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDividerModule,

    AppFeaturePageComponent,
  ],
})
export class AppFeatureCoreModule {}
