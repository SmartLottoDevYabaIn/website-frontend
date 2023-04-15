import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteriesRoutingModule } from './lotteries-routing.module';
import { LotteriesComponent } from './lotteries.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { LottoListModule } from 'src/app/front-office/sections/lotto-list/lotto-list.module';

@NgModule({
  declarations: [LotteriesComponent],
  imports: [
    CommonModule,
    LotteriesRoutingModule,
    RouterModule,
    DataTablesModule,
    LottoListModule
  ]
})
export class LotteriesModule { }
