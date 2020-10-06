import {Role} from './Role';

export class BoardUser {
  invitationId: number;
  id: number;
  name: string;
  localRole: Role;
  accepted: boolean;
}
