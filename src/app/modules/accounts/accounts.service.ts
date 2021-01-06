import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import Accounts from './accounts.json';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsUrl = 'api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this.http.get(this.accountsUrl);
 }

}
