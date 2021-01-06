import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from './transaction';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsUrl = 'api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  /**
   * @name getTransactionsById
   * @description Fetching transactions filtered by accound id
   *
   * @public
   * @param { number } id - Account id
   */
  getTransactionsById(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl)
      .pipe(
        map((transactions: Transaction[]) => transactions.filter(t => t.accountId === id)),
        catchError(error => {
          console.log('Throwing error');
          return throwError(error);
      })
      );
  }

}
