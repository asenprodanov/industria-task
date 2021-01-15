import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { Transaction } from './transaction';

@Injectable()
export class TransactionsService {
  async readTransactions(): Promise<Transaction[]> {
    try {
      const data = await fs.readFile(
        './src/modules/transactions/transactions.json',
      );
      return JSON.parse(data.toString());
    } catch (err) {
      console.log(err);
    }
  }
  async writeTransactions(transaction: Transaction): Promise<void> {
    try {
      let readData = await fs.readFile(
        './src/modules/transactions/transactions.json',
      );
      readData = JSON.parse(readData.toString());
      // console.warn('transaction', transaction);
      // console.warn('readData', readData);
      const newData = JSON.stringify([...readData, transaction], null, 2);
      await fs.writeFile(
        './src/modules/transactions/transactions.json',
        newData,
      );
    } catch (err) {
      console.log(err);
    }
  }
}
