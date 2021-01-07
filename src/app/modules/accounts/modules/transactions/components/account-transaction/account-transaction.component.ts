import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Transaction } from '../../transaction';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

  @Input() transaction: Transaction;
  @Input() isHidden: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
