import { Controller, Get } from '@nestjs/common';

import { Account } from './account';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  async getAccounts(): Promise<Account[]> {
    const transactionsData = await this.accountsService.readAccounts();
    return transactionsData;
  }
}
