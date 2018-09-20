import {Role} from './role';

export interface Employee {
  id: number;
  loginId: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  email: string;
  role: Role;
}
