import { Status } from '../enum/status.enum';
export class Notificacion {
  Status: Status;
  EventId: number;
  Mcc: number;
  Mnc: string;
  Msgcount: number;
  Msisdn: string;
  Received: number;
  UserReference: string;
}
