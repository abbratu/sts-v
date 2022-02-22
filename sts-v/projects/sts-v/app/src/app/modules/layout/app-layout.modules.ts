import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AppLayoutContainerComponent } from './components/layout-container/app-layout-container.component';
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
    AppLayoutContainerComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
