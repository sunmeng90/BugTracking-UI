import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  sideNavToggle: boolean;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._router.navigate(['employees']);
  }

  navToggle(event) {
    console.log('toggle side nav', event);
  }

}
