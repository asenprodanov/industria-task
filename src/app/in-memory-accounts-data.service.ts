import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import Accounts from './modules/accounts/accounts.json';
import Transactions from './modules/accounts/modules/transactions/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryAccountsDataService implements InMemoryDbService {

  createDb() {
    const accounts = Accounts;
    const transactions = Transactions;
    return { accounts, transactions };
  }

}
