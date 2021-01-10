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
      paymentDescription: [this.transactionData?.paymentDescription ? this.transactionData?.paymentDescription : null, Validators.required],
      date: [this.transactionData?.date ? this.transactionData?.date : null, Validators.required],
      time: [this.transactionData?.time ? this.transactionData?.time : null, Validators.required]
    });
  }

}
