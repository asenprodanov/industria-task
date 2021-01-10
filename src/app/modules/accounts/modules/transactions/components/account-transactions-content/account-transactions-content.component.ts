import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Transaction } from '../../transaction';
import { TransactionsService } from '../../transactions.service';
import { AccountTransactionComponent } from '../account-transaction/account-transaction.component';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-transactions-content',
  templateUrl: './account-transactions-content.component.html',
  styleUrls: ['./account-transactions-content.component.scss']
})
export class AccountTransactionsContentComponent implements OnInit, AfterViewInit, OnDestroy {

  // List of transaction component with additional info
  @ViewChildren(AccountTransactionComponent) additionalInfo: QueryList<AccountTransactionComponent>;
  @Input() accountId: number;
  public transactionsData$: Observable<Transaction[]>;
  public isHidden = true;
  public selected = false;
  private additionalInfoSubscription: Subscription;
  private infoSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionsService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
         this.accountId = +params.get('accountId');
         this.transactionsData$ = this.transactionService.transactionsData$
          .pipe(
            map((transactions: Transaction[]) => transactions.filter(t => t.accountId === this.accountId))
          );
      }
    );
  }

  ngAfterViewInit(): void {
    this.ref.detectChanges();
    this.additionalInfoTooggle();
    this.additionalInfoSubscription = this.additionalInfo.changes
      .subscribe(() => {
        this.additionalInfoTooggle();
    });
  }

  ngOnDestroy(): void {
    if (this.additionalInfoSubscription ) {
      this.additionalInfoSubscription.unsubscribe();
    }
    if (this.infoSubscription) {
      this.infoSubscription.unsubscribe();
    }
  }

  private additionalInfoTooggle(): void {
    if (this.additionalInfo.toArray().length) {
      this.additionalInfo.toArray().forEach((info: AccountTransactionComponent) => {
        this.infoSubscription = info.toggle
          .subscribe(() => {
            this.showAdditionalInfo(info);
          });
      });
    }
  }

  // Toggle additional info
  private showAdditionalInfo(info: AccountTransactionComponent): void {
    this.additionalInfo.toArray().forEach(i => {
      if (i.isHidden !== info.isHidden ) {
        i.isHidden = true;
      }
    });
    info.isHidden = !info.isHidden;
  }

}
