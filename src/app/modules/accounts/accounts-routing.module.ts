import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: ':accountId', component: AccountTransactionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
