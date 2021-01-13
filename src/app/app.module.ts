import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/bg';

import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryAccountsDataService } from './in-memory-accounts-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsModule } from './modules/accounts/modules/transactions/transactions.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsModule } from './modules/payment/payments.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryAccountsDataService, { dataEncapsulation: false }
    ),
    CommonModule,
    SharedModule,
    TransactionsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaymentsModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'bg' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
