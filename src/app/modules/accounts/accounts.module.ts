import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { TransactionsModule } from './modules/transactions/transactions.module';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountItemComponent
  ],
  imports: [
    CommonModule,
    TransactionsModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
