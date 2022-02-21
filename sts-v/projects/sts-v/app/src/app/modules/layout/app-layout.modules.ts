import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppLayoutFooterComponent } from './components/layout-footer/app-layout-footer.component';
import { AppLayoutHeaderComponent } from './components/layout-header/app-layout-header.component';
import { AppLayoutComponent } from './components/layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutFooterComponent,
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
