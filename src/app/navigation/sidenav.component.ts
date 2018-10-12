import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SideMenuService} from '../service/side-menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sideNav') sideNav;

  params: Observable<Params>;

  constructor(private  _route: ActivatedRoute,
              private  _router: Router, private sideMenuService: SideMenuService) {
  }

  ngOnInit() {
    console.log('path from root: ', this._route.pathFromRoot);
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign
    );
  }

  ngAfterViewInit(): void {
    this.sideMenuService.sideMenuSubject.subscribe(
      () => this.sideNav.toggle()
    );
  }

}


