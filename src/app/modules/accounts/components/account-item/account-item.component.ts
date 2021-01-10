import { Component, Input, OnInit } from '@angular/core';

import { PaymentsComponent } from 'src/app/modules/payment/components/payments/payments.component';
import { PaymentsService } from 'src/app/modules/payment/payments.service';
import { Account } from '../../account';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent implements OnInit {

  @Input() accounts: Account[];

  constructor(public paymentsService: PaymentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openPayment(id: number) {
    const dialogRef = this.dialog.open(PaymentsComponent, {
      data: { accountId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      const initialStep = this.paymentsService.initialStep;
      this.paymentsService.setCurrentStep(initialStep);
      console.log(`Dialog result: ${ result }`);
    });
  }

}
