# BugTrackingUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Login & Main route-outlet
Option 1: Two routes, login routes without nav bar, and home routes with nav bar   
Option 2: One routes, toggle display of nav bar when user is logged in or not  
**[Hide SideNav While Login in Angular Material](https://www.devglan.com/angular/angular-hide-sidenav-login-page)**  
[Angular2 - router-outlet with login structure](https://stackoverflow.com/questions/38313887/angular2-router-outlet-with-login-structure)    
[CanActivate: requiring authentication](https://angular.io/guide/router#canactivate-requiring-authentication)  
[Basic Routing in Angular](https://blog.ng-book.com/basic-routing-in-angular-2/)  
[Angular: Hide Navbar Menu from Login page](https://loiane.com/2017/08/angular-hide-navbar-login-page/)  


##How to communicate between two components
1. use custom events  
2. use service  
[[Sidenav] Open sidenav from another component ](https://github.com/angular/material2/issues/2936)  


#When passing Observable from parent to child using @input, how to avoid undefined error when subscribe the observable when it is not assigned?
[3 Ways to Pass Async Data to Angular 2+ Child Components](https://scotch.io/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components)  
[Observable of @Input property](https://stackoverflow.com/questions/44467336/observable-of-input-property)
1. implements OnChanges and add callback in `ngOnChanges` to subscribe when input changes
2. Using `BehaviorSubject`  like this:
```ts  
export class ActionListComponent implements OnInit {

  private _routeParams = new BehaviorSubject<Params>(null);

  @Input()
  set params(value) {
    this._routeParams.next(value);
  }

  get params() {
    return this._routeParams.getValue();
  }

  constructor(public sideMenuService: SideMenuService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._routeParams
      .pipe(
        filter(param => param != null)
      )
      .subscribe(data => {
        console.log('params: ', data.section);
      });
  }
}
```
3. [Angular2: Binding an observable to an immutable child component input](https://almerosteyn.com/2016/03/immutable-component-input-from-observable)


  
##JWT
[Creating Beautiful Apps with Angular Material](https://auth0.com/blog/creating-beautiful-apps-with-angular-material/)

##TODO
https://www.sitepoint.com/component-routing-angular-router/
