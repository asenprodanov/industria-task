import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import Accounts from './modules/accounts/accounts.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryAccountsDataService implements InMemoryDbService {

  createDb() {
    const accounts = Accounts;
    return { accounts };
  }
}
