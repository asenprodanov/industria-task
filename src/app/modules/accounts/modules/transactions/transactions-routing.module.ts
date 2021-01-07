import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
