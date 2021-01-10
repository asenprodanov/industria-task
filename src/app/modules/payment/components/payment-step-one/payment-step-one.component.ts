import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  public currencies: string[] = ['bgn', 'usd', 'eur'];
  public selectedTemplate: Template;
  public paymentForm1: FormGroup;
  public accountsData: Account[];
  private bgnIbanPattern: RegExp = new RegExp(/^BG\d{2}[A-Z]{4}\d{6}[0-9A-Z]{8}$/);

  constructor(
    private formBuilder: FormBuilder,
    private accountsService: AccountsService,
    @Inject(MAT_DIALOG_DATA) public data: { accountId: number }
  ) { }

  ngOnInit(): void {
    this.initForm();
    // Setting the id of the account if we are opening the dialog from accounts
    if (this.data?.accountId) {
      this.paymentForm1.get('accountId').setValue(this.data.accountId);
    }
    this.accountsService.getAccounts().subscribe(
      (data: Account[]) => this.accountsData = data
    );
  }

  private initForm(): void {
    this.paymentForm1 = this.formBuilder.group({
      accountId: [this.transactionData?.accountId ? this.transactionData?.accountId : null],
      accountName: [this.transactionData?.accountName ? this.transactionData?.accountName : null, Validators.required],
      currency: [this.transactionData?.currency ? this.transactionData?.currency : null, Validators.required],
      ammount: [this.transactionData?.ammount ? this.transactionData?.ammount : null, Validators.required],
      recepientIban: [
        this.transactionData?.recepientIban ? this.transactionData?.recepientIban : null,
        { validators: [Validators.required, Validators.pattern(this.bgnIbanPattern)] }
      ],
      recepientName: [this.transactionData?.recepientName ? this.transactionData?.recepientName : null, Validators.required]
    });
  }

  public selectTemplate(template: Template): void {
    this.selectedTemplate = template;
  }

  public onSelectChange(id: number): void {
    const account: Account = this.accountsData.find(acct => acct.accountId === id);
    this.paymentForm1.get('accountName').setValue(account.accountName);
  }

}
