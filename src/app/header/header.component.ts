import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//https://candordeveloper.com/2017/04/25/how-to-create-dynamic-menu-and-page-title-with-angular-material-and-cli/
  //https://github.com/angular/material2/issues/2936
  @Output()
  sideNavToggle = new EventEmitter<boolean>();

  constructor() {
  }

  navOpen() {
    this.sideNavToggle.emit(true);
  }

  ngOnInit() {
  }

}
