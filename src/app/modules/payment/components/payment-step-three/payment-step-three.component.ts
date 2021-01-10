import { Component, OnInit, Input } from '@angular/core';

import { Transaction } from '../../../accounts/modules/transactions/transaction';

@Component({
  selector: 'app-payment-step-three',
  templateUrl: './payment-step-three.component.html',
  styleUrls: ['./payment-step-three.component.scss']
})
export class PaymentStepThreeComponent implements OnInit {

  @Input() transactionData: Transaction;

  constructor() { }

  ngOnInit(): void {
    console.warn('transactionData', this.transactionData);
  }

}
