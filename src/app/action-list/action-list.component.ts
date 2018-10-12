import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {SideMenuService} from '../service/side-menu.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  @Input()
  params: Observable<Params>;

  constructor(public sideMenuService: SideMenuService, private _route: ActivatedRoute) {
  }

  ngOnInit() {

  }

}
