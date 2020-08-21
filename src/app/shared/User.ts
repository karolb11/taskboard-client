import {Role} from './Role';

export interface User {
 id: number;
 name: string;
 localRole: Role;
 accepted: boolean;
}
