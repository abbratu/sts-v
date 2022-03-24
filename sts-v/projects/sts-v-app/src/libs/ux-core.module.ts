import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [ FlexLayoutModule, MatButtonModule, MatDividerModule, MatIconModule];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class AppUxCoreModule { }
