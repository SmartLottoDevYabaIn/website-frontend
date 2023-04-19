import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from './customer-list.component';
import { DataTablesModule } from "angular-datatables";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerListRoutingModule,ReactiveFormsModule,FormsModule,
    DataTablesModule,
    TranslateModule
  ]
})
export class CustomerListModule { }
