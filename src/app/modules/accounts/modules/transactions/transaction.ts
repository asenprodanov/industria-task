export interface Transaction {
  transactionId: number;
  accountName: string;
  accountIban: string;
  recepientIban: string;
  recepientName: string;
  transactionDescription: string;
  transactionStatus: 'pending' | 'inflow' | 'outflow';
  currency: string;
  ammount: number;
  transactionDate: Date;
  transactionValidBefore: Date;
  accountId: number;
}
