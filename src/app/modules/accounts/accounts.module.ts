import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountItemComponent } from './components/account-item/account-item.component';


@NgModule({
  declarations: [
    AccountsComponent,
    AccountItemComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
