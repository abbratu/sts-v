import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppLayoutFooterComponent } from './components/layout-footer/app-layout-footer.component';
import { AppLayoutHeaderComponent } from './components/layout-header/app-layout-header.component';
import { AppLayoutNavComponent } from './components/layout-nav/app-layout-nav.component';
import { AppLayoutComponent } from './components/layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutFooterComponent,
    AppLayoutNavComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
