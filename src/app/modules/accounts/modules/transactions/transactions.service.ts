import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from './transaction';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsUrl = 'api/transactions';
  private transactionsData = new BehaviorSubject<Transaction[]>([]);
  public transactionsData$: Observable<Transaction[]> = this.transactionsData.asObservable();

  constructor(private http: HttpClient) { }

  getTransactions() {
    this.http.get<Transaction[]>(this.transactionsUrl)
      .pipe(
        catchError(error => {
          console.log('Throwing error!');
          return throwError(error);
        })
      )
      .subscribe(
        (transactions: Transaction[]) => this.transactionsData.next(transactions)
      );
  }

  /**
   * @name getTransactionsById
   * @description Fetching transactions filtered by accound id
   *
   * @public
   * @param { number } id - Account id
   */
  getTransactionsById(id: number): void {
    this.http.get<Transaction[]>(this.transactionsUrl)
      .pipe(
        map((transactions: Transaction[]) => transactions.filter(t => t.accountId === id)),
        catchError(error => {
          console.log('Throwing error!');
          return throwError(error);
        })
      );
  }

  createTransaction(data: Transaction): void {
    const transactions = this.transactionsData.getValue();
    this.transactionsData.next([...transactions, data]);
  }

}
