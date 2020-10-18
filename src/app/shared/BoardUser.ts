import {LocalRole} from './LocalRole';

export class BoardUser {
  invitationId: number;
  id: number;
  name: string;
  localRole: LocalRole;
  accepted: boolean;
}
