import { Component, OnInit, ViewChild } from '@angular/core';
import { AllModulesService } from 'src/app/services/all-modules.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: any = [];
  errorMessage: any;
  public tempId: any;
  url: any = 'customers';
  wating = true;
  usersList: any;

  constructor(
    private srvModuleService: AllModulesService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.getCustomers();

    if (this.usersList) {
      this.wating = false;
    } else {
      setTimeout(() => {
        this.wating = false;
      }, 3000);
    }
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  refreshList(){
    this.wating = true;
    setTimeout(() => {
      console.log(' in else');
      this.userService.getAllUsers()
        .then((result) => {
          let tab: any = result.data;
          for (let i = 0; i < result.data.length; i++) {
            tab[i] = this.userService.parseDataFromApi(tab[i]);
            console.log('user ', i, ': ', tab[i])
          }
          localStorage.setItem("users-list", JSON.stringify(tab))
          this.customers = tab;
          // console.log('Liste des users: ', this.customers)
          // this.waitingData0 = true;
        })
        .catch((error) => {
          console.error('Erreur: ', error.message);
        });
      this.wating = false;
    }, 3000);
  }

  getCustomers() {
    // this.customers = this.srvModuleService.customers;

    // this.srvModuleService.get(this.url).subscribe((res) => {
    //     this.customers = res;
    //   },
    // );
    this.usersList = localStorage.getItem('users-list');
    if (this.usersList) {
      this.customers = JSON.parse(localStorage.getItem('users-list'));
      console.log(this.customers);
    } else {
      this.refreshList();

    }
  }

  filter() { }
  deleteCustomer() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
      this.getCustomers();
    });
  }

}
