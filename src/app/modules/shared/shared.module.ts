import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from 'src/app/modules/shared/components/left-menu/left-menu.component';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LeftMenuComponent
  ]
})
export class SharedModule { }
