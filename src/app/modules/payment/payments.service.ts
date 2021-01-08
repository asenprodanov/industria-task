import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  public initialStep = 1;
  public STEPS = 3;
  public currentStep: BehaviorSubject<number> = new BehaviorSubject(this.initialStep);
  public currentStep$: Observable<number> = this.currentStep.asObservable();

  setCurrentStep(step: number): void {
    this.currentStep.next(step);
  }

  getCurrentStep(): Observable<number> {
    return this.currentStep$;
  }

  nextStep() {
    const index = this.currentStep.value;
    if (index < this.STEPS) {
      this.currentStep.next(index);
    }
  }

}
