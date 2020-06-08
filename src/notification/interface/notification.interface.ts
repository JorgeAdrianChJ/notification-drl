import { Status } from '../enum/status.enum';
export interface notification {
  Status: Status;
  EventId: number;
  Mcc: number;
  Mnc: string;
  Msgcount: number;
  Msisdn: string;
  Received: number;
  UserReference: string;
}
