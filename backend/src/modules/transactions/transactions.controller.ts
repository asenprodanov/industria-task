import { Controller, Get, Post, Body } from '@nestjs/common';

import { Transaction } from './transaction';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  async addTransaction(@Body() transaction: Transaction) {
    await this.transactionsService.writeTransactions(transaction);
    return { message: 'Success!' };
  }

  @Get()
  async getTransactions(): Promise<Transaction[]> {
    const transactionsData = await this.transactionsService.readTransactions();
    return transactionsData;
  }
}
