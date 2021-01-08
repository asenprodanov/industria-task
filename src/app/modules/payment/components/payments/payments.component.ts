import { Component, OnInit } from '@angular/core';

import { PaymentsService } from '../../payments.service';

import { Observable } from 'rxjs';

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

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.steps = this.paymentsService.STEPS;
    this.stepsArray = [...Array(this.steps).keys()];
    this.currentStep$ = this.paymentsService.getCurrentStep();
  }

}
