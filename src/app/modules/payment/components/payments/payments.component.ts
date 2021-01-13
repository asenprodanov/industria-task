import { Component, OnInit, ViewChild } from '@angular/core';

import { PaymentsService } from '../../payments.service';
import { LeftMenuComponent } from 'src/app/modules/shared/components/left-menu/left-menu.component';
import { PaymentStepOneComponent } from '../payment-step-one/payment-step-one.component';
import { PaymentStepTwoComponent } from '../payment-step-two/payment-step-two.component';
import { Transaction } from '../../../accounts/modules/transactions/transaction';

import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @ViewChild(PaymentStepOneComponent) stepOneComponent: PaymentStepOneComponent;
  @ViewChild(PaymentStepTwoComponent) stepTwoComponent: PaymentStepTwoComponent;
  public title = 'Направете превод';
  public steps: number;
  public stepsArray: number[];
  public currentStep$: Observable<number>;
  public transactionData: Transaction;

  constructor(public paymentsService: PaymentsService, public dialogRef: MatDialogRef<LeftMenuComponent>) { }

  ngOnInit(): void {
    this.steps = this.paymentsService.STEPS;
    this.stepsArray = [...Array(this.steps).keys()];
    this.currentStep$ = this.paymentsService.getCurrentStep();
  }

  // Triggering child forms validation and moving to next step if valid and closing the dialog
  public nextStep(currentStep: number): void {
    // TODO the code doesn't look that good
    if (currentStep === 1) {
      this.stepOneComponent.paymentForm1.markAllAsTouched();
      if (this.stepOneComponent.paymentForm1.valid) {
        this.addDataAndMove(this.stepOneComponent.paymentForm1);
      }
    } else if (currentStep === 2) {
      this.stepTwoComponent.paymentForm2.markAllAsTouched();
      if (this.stepTwoComponent.paymentForm2.valid) {
        this.addDataAndMove(this.stepTwoComponent.paymentForm2);
      }
    } else if (currentStep === 3) {
      this.transactionData = { ...this.transactionData, transactionStatus: 'pending' };
      this.paymentsService.nextStep(this.transactionData);
      this.dialogRef.close();
    }
  }

  public prevStep(): void {
    this.paymentsService.prevStep();
  }

  private addDataAndMove(form: FormGroup): void {
    this.transactionData = { ...this.transactionData, ...form.value };
    this.paymentsService.nextStep(this.transactionData);
  }

}
