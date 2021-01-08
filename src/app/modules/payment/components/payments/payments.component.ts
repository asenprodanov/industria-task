import { Component, OnInit } from '@angular/core';

import { PaymentsService } from '../../payments.service';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';
import { Transaction } from '../../../accounts/modules/transactions/transaction';

import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionsService } from 'src/app/modules/accounts/modules/transactions/transactions.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  public title = 'Направете превод';
  public steps: number;
  public stepsArray: number[];
  public currentStep$: Observable<number>;
  // public transactionData: Transaction = {
  //   date: new Date(),
  //   time: new Date(),
  //   accountName: 'Разплащателна сметка 2',
  //   receiverName: 'Иван Иванов',
  //   paymentDescription: 'Такса вода',
  //   transactionStatus: 'outflow',
  //   currency: 'BGN',
  //   ammount: 231,
  //   dateAndTime: new Date(),
  //   iban: 'BG08UNCR70078929122111',
  //   additionalDescription: 'Пояснения към нов превод',
  //   accountId: 2
  // };

  constructor(
    public paymentsService: PaymentsService,
    public transactionService: TransactionsService,
    public dialogRef: MatDialogRef<LeftMenuComponent>
  ) { }

  ngOnInit(): void {
    this.steps = this.paymentsService.STEPS;
    this.stepsArray = [...Array(this.steps).keys()];
    this.currentStep$ = this.paymentsService.getCurrentStep();
  }

  nextStep(): void {
    const currentStep = this.paymentsService.currentStep.value;
    if (currentStep === this.paymentsService.STEPS) {
      this.dialogRef.close();
      // this.transactionService.createTransaction(this.transactionData);
      return;
    }
    this.paymentsService.setCurrentStep(currentStep + 1);
  }

}
