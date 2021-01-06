import { Component, Input, OnInit } from '@angular/core';

import { Account } from '../../account';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent implements OnInit {

  @Input() accounts: Account[];

  constructor() { }

  ngOnInit(): void {
  }

}
