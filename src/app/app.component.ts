import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drooms';

  constructor(private translate: TranslateService,
              private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}
