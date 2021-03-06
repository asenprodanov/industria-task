import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsService } from '../../accounts.service';
import { Account } from '../../account';

@Component({
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public title = 'Сметки';
  public accountsData$: Observable<Account[]>;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsData$ = this.accountsService.getAccounts();
  }

}
