import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SideMenuItem, SideMenuService} from '../service/side-menu.service';
import {concatMap, filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  private _routeParams = new BehaviorSubject<Params>(null);
  private actionListSubject = new BehaviorSubject<SideMenuItem[]>([]);
  actionList$ = this.actionListSubject.asObservable();

  @Input()
  set params(value) {
    this._routeParams.next(value);
  }

  get params() {
    return this._routeParams.getValue();
  }

  constructor(public sideMenuService: SideMenuService, private _route: ActivatedRoute, private  _router: Router) {
  }

  ngOnInit() {
    this._routeParams
      .pipe(
        tap(() => this.actionListSubject.next([])),
        filter(param => !!param),
        concatMap((param: Observable<Params>) => param),
        map(data => {
          console.log('loading menu for section: ', data.section);
          let actionList: SideMenuItem[] = this.sideMenuService.getItems(data.section);
          this.actionListSubject.next(actionList);
          if (actionList && actionList.length > 0) {
            this._router.navigateByUrl(`${data.section}/${actionList[0].id}`);
          }
        })
      )
      .subscribe();

    // this.actionList$
    //   .pipe(
    //     filter((actionList: SideMenuItem[]) =>
    //       actionList && actionList.length > 0
    //     ),
    //     mergeMap((actionList: SideMenuItem[]) => {
    //       return this._routeParams.pipe(
    //         filter(param => !!param),
    //         concatMap((param: Observable<Params>) => param),
    //         map(data => {
    //           return `${data.section}/${actionList[0].id}`;
    //         })
    //       );
    //     })
    //   )
    //   .subscribe((url) => {
    //     console.log('navigate to:', url);
    //     this._router.navigateByUrl(url)
    //   });
  }
}
