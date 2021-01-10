import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentStepOneComponent } from './components/payment-step-one/payment-step-one.component';
import { PaymentStepTwoComponent } from './components/payment-step-two/payment-step-two.component';
import { PaymentStepThreeComponent } from './components/payment-step-three/payment-step-three.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentStepOneComponent,
    PaymentStepTwoComponent,
    PaymentStepThreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PaymentsModule { }
