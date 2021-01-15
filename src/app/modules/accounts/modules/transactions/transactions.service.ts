import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from './transaction';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsUrl = 'http://localhost:3000/transactions';
  public transactionsData = new BehaviorSubject<Transaction[]>([]);
  public transactionsData$: Observable<Transaction[]> = this.transactionsData.asObservable();

  constructor(private http: HttpClient) { }

  getTransactions(): void {
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

  createTransaction(data: Transaction) {
    this.http.post<string>(this.transactionsUrl, data)
      .pipe(
        catchError(error => {
          console.log('Throwing error!');
          return throwError(error);
        })
      )
      .subscribe(console.log);
  }

}
