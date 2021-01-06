import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction';

import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {

  public accountId: number;
  public transactionsData$: Observable<Transaction[]>;

  constructor(private route: ActivatedRoute, private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
         this.accountId = +params.get('accountId');
         this.transactionsData$ = this.transactionService.getTransactionsById(this.accountId);
      }
    );
  }

}
