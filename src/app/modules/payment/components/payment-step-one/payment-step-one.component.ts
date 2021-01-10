import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Account } from 'src/app/modules/accounts/account';
import { AccountsService } from 'src/app/modules/accounts/accounts.service';
import { Transaction } from 'src/app/modules/accounts/modules/transactions/transaction';

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

  @Input() transactionData: Transaction;
  public templates: Template[] = [
    { tempalteId:  1, templateName: 'Плащане 1', templateAmount: 1500, templateCurrency: 'BGN', templateInfo: 'Информация 1' },
    { tempalteId:  2, templateName: 'Плащане 2', templateAmount: 1400, templateCurrency: 'BGN', templateInfo: 'Информация 2' },
    { tempalteId:  3, templateName: 'Плащане 3', templateAmount: 1300, templateCurrency: 'BGN', templateInfo: 'Информация 3' },
    { tempalteId:  4, templateName: 'Плащане 4', templateAmount: 1200, templateCurrency: 'BGN', templateInfo: 'Информация 4' },
    { tempalteId:  5, templateName: 'Плащане 5', templateAmount: 1100, templateCurrency: 'BGN', templateInfo: 'Информация 5' },
    { tempalteId:  6, templateName: 'Плащане 6', templateAmount: 1000, templateCurrency: 'BGN', templateInfo: 'Информация 6' }
  ];
  public selectedTemplate: Template;
  public paymentForm1: FormGroup;
  public accountsData: Account[];
  private bgnIbanPattern: RegExp = new RegExp(/^BG\d{2}[A-Z]{4}\d{6}[0-9A-Z]{8}$/);

  constructor(private formBuilder: FormBuilder, private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.initForm();
    this.accountsService.getAccounts().subscribe(
      (data: Account[]) => this.accountsData = data
    );
  }

  private initForm(): void {
    this.paymentForm1 = this.formBuilder.group({
      accountId: [this.transactionData?.accountId ? this.transactionData?.accountId : null],
      accountName: [this.transactionData?.accountName ? this.transactionData?.accountName : null, Validators.required],
      receiverName: [this.transactionData?.receiverName ? this.transactionData?.receiverName : null, Validators.required],
      currency: [this.transactionData?.currency ? this.transactionData?.currency : null, Validators.required],
      ammount: [this.transactionData?.ammount ? this.transactionData?.ammount : null, Validators.required],
      iban: [
        this.transactionData?.iban ? this.transactionData?.iban : null,
        { validators: [Validators.required, Validators.pattern(this.bgnIbanPattern)] }
      ]
    });
  }

  public selectTemplate(template: Template): void {
    this.selectedTemplate = template;
  }

  public onSelectChange(account: Account): void {
    this.paymentForm1.get('accountId').setValue(account.accountId);
    this.paymentForm1.get('accountName').setValue(account.accountName);
    this.paymentForm1.get('currency').setValue(account.accountCurrency);
  }

}
