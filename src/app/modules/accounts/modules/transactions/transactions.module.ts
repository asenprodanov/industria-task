import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { AccountTransactionsContentComponent } from './components/account-transactions-content/account-transactions-content.component';
import { AccountTransactionComponent } from './components/account-transaction/account-transaction.component';

@NgModule({
  declarations: [
    AccountTransactionsComponent,
    AccountTransactionsContentComponent,
    AccountTransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountTransactionsComponent,
    AccountTransactionsContentComponent,
    AccountTransactionComponent
  ]
})
export class TransactionsModule { }
