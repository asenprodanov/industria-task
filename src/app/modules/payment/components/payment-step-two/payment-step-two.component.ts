import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Transaction } from 'src/app/modules/accounts/modules/transactions/transaction';

@Component({
  selector: 'app-payment-step-two',
  templateUrl: './payment-step-two.component.html',
  styleUrls: ['./payment-step-two.component.scss']
})
export class PaymentStepTwoComponent implements OnInit {

  @Input() transactionData: Transaction;
  public paymentForm2: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.paymentForm2 = this.formBuilder.group({
      transactionDescription: [
        this.transactionData?.transactionDescription ? this.transactionData?.transactionDescription : null, Validators.required
      ],
      transactionDate: [this.transactionData?.transactionDate ? this.transactionData?.transactionDate : null, Validators.required],
      transactionValidBefore: [
        this.transactionData?.transactionValidBefore ? this.transactionData?.transactionValidBefore : null, Validators.required
      ]
    });
  }

}
