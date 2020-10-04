import {Role} from './Role';

export class User {
  invitationId: number;
  id: number;
  name: string;
  localRole: Role;
  accepted: boolean;
}
