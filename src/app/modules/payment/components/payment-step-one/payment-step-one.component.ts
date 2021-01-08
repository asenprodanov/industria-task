import { Component, OnInit } from '@angular/core';

import { PaymentsService } from '../../payments.service';

interface Template {
  tempalteId: number;
  templateName: string;
  templateAmount: number;
  templateCurrency: string;
  templateInfo: string;
}

@Component({
  selector: 'app-payment-step-one',
  templateUrl: './payment-step-one.component.html',
  styleUrls: ['./payment-step-one.component.scss']
})
export class PaymentStepOneComponent implements OnInit {

  // private currentComponentStep = 1;
  public templates: Template[] = [
    { tempalteId:  1, templateName: 'Плащане 1', templateAmount: 1500, templateCurrency: 'BGN', templateInfo: 'Информация 1' },
    { tempalteId:  2, templateName: 'Плащане 2', templateAmount: 1400, templateCurrency: 'BGN', templateInfo: 'Информация 2' },
    { tempalteId:  3, templateName: 'Плащане 3', templateAmount: 1300, templateCurrency: 'BGN', templateInfo: 'Информация 3' },
    { tempalteId:  4, templateName: 'Плащане 4', templateAmount: 1200, templateCurrency: 'BGN', templateInfo: 'Информация 4' },
    { tempalteId:  5, templateName: 'Плащане 5', templateAmount: 1100, templateCurrency: 'BGN', templateInfo: 'Информация 5' },
    { tempalteId:  6, templateName: 'Плащане 6', templateAmount: 1000, templateCurrency: 'BGN', templateInfo: 'Информация 6' }
  ];
  public selectedTemplate: Template;

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit(): void {
  }

  selectTemplate(template: Template): void {
    this.selectedTemplate = template;
  }

  nextStep(): void {
    const currentStep = this.paymentsService.currentStep.value;
    this.paymentsService.setCurrentStep(currentStep + 1);
  }

}
