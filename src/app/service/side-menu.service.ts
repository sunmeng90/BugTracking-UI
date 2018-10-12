import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface SideMenuItem {
  id: string;
  name: string;
}

export const SECTIONS: { [key: string]: SideMenuItem[] } = {
  'employees': [
    {
      id: 'viewEmployees',
      name: 'View Employees'
    },
    {
      id: 'createEmployee',
      name: 'Create New Employees'
    }
  ],
  'projects': [
    {
      id: 'viewProjects',
      name: 'View Projects'
    },
    {
      id: 'createProject',
      name: 'Create New Project'
    }
  ],
  'bugs': [
    {
      id: 'viewBugs',
      name: 'View Bugs'
    },
    {
      id: 'createBug',
      name: 'Create New Bugs'
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  sideMenuSubject = new Subject<boolean>();

  constructor() {
  }

  getItems(section: string) {
    return SECTIONS[section] || [];
  }

  sideMenuToggleSubject() {
    return this.sideMenuSubject;
  }

}
