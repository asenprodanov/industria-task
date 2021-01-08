export interface Transaction {
  date: Date;
  time: Date;
  accountName: string;
  receiverName: string;
  paymentDescription: string;
  transactionStatus: string;
  currency: string;
  ammount: number;
  dateAndTime: Date;
  iban: string;
  additionalDescription: string;
  accountId: number;
}
