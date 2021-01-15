import { Injectable } from '@angular/core';

import { TransactionsService } from '../accounts/modules/transactions/transactions.service';
import { Transaction } from '../accounts/modules/transactions/transaction';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(public transactionService: TransactionsService) { }

  public initialStep = 1;
  public STEPS = 3;
  public currentStep: BehaviorSubject<number> = new BehaviorSubject(this.initialStep);
  public currentStep$: Observable<number> = this.currentStep.asObservable();

  public setCurrentStep(step: number): void {
    this.currentStep.next(step);
  }

  public getCurrentStep(): Observable<number> {
    return this.currentStep$;
  }

  public nextStep(data: Transaction): void {
    const currentStep = this.currentStep.getValue();
    if (currentStep === this.STEPS) {
      this.nextPayment(data);
      return;
    }
    this.setCurrentStep(currentStep + 1);
  }

  public prevStep(): void {
    const currentStep = this.currentStep.getValue();
    if (currentStep <= 1) {
      return;
    }
    this.setCurrentStep(currentStep - 1);
  }

  nextPayment(data: Transaction): void {
    const transactions = this.transactionService.transactionsData.getValue();
    this.transactionService.transactionsData.next([...transactions, data]);
  }

}
