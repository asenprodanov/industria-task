import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsService } from '../../accounts.service';

@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public title = 'Сметки';
  public accountsData$: Observable<[]>;

  constructor(private accounts: AccountsService) { }

  ngOnInit(): void {
    this.accountsData$ = this.accounts.getAccounts();
  }

}
