import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent implements OnInit {

  @Input() accounts: [];

  constructor() { }

  ngOnInit(): void {
    console.warn('accounts', this.accounts);
  }

}