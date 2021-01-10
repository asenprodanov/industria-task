import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryAccountsDataService } from './in-memory-accounts-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionsModule } from './modules/accounts/modules/transactions/transactions.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsModule } from './modules/payment/payments.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryAccountsDataService, { dataEncapsulation: false }
    ),
    TransactionsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaymentsModule,
    MatDialogModule
  ],
  entryComponents: [
    LeftMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
