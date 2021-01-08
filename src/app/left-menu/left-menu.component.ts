import { Component, OnInit } from '@angular/core';

import { PaymentsComponent } from '../modules/payment/components/payments/payments.component';
import { PaymentsService } from '../modules/payment/payments.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(public dialog: MatDialog, private paymentsService: PaymentsService) { }

  ngOnInit(): void {
  }

  openPayment() {
    const dialogRef = this.dialog.open(PaymentsComponent);

    dialogRef.afterClosed().subscribe(result => {
      const initialStep = this.paymentsService.initialStep;
      this.paymentsService.setCurrentStep(initialStep);
      console.log(`Dialog result: ${ result }`);
    });
  }

}
