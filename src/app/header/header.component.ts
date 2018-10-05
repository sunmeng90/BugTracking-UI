import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideMenuService} from '../service/side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //  https://candordeveloper.com/2017/04/25/how-to-create-dynamic-menu-and-page-title-with-angular-material-and-cli/
  //  https://github.com/angular/material2/issues/2936
  constructor(private sideMenuService: SideMenuService) {
  }

  navToggle() {
    this.sideMenuService.sideMenuToggleSubject()
      .next(true);
  }

  ngOnInit() {
  }

}
