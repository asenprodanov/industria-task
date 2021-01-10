import { Component, OnInit } from '@angular/core';

import { TransactionsService } from './modules/accounts/modules/transactions/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Unicredit Bulbank';

  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions();
  }

}
