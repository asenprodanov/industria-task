export interface Transaction {
  date: Date;
  time: Date;
  accountName: string;
  receiverName: string;
  paymentDescription: string;
  transactionStatus: Status;
  currency: string;
  ammount: number;
  dateAndTime: Date;
  iban: string;
  additionalDescription: string;
  accountId: number;
}

export enum Status {
  pending = 'Pending',
  outflow = 'Outflow',
  inflow = 'Inflow'
}
