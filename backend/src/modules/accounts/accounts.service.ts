import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

import { Account } from './account';

@Injectable()
export class AccountsService {
  async readAccounts(): Promise<Account[]> {
    try {
      const data = await fs.readFile('./src/modules/accounts/accounts.json');
      return JSON.parse(data.toString());
    } catch (err) {
      console.log(err);
    }
  }
}
