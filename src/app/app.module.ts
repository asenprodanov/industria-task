import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryAccountsDataService } from './in-memory-accounts-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountTransactionsComponent } from './modules/accounts/modules/transactions/components/account-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    PageNotFoundComponent,
    AccountTransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryAccountsDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
