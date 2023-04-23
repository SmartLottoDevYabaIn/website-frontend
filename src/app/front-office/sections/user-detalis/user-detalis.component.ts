import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/services/entities/user';
import { TranslationService } from 'src/app/services/translation/language.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-detalis',
  templateUrl: './user-detalis.component.html',
  styleUrls: ['./user-detalis.component.css'],
})
export class UserDetalisComponent implements OnInit {
  @Input() userData: any;
  @Input() isAdmin: boolean = true;
  @Input() isEditable: boolean = true;
  @Input() creationDate?: string;
  @Input() creationTime?: string;

  constructor(
    private userService: UserService,
    private translate: TranslateService,
    private translationService: TranslationService
    ) {

  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {

    this.scrollToTop();
    this.translate.use(this.translationService.getLanguage());
    
  }

}
