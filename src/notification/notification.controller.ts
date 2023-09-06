import { Controller, Body, Post,Headers, Logger,Req } from '@nestjs/common';
import { Notificacion } from './dto/notification.dto';

@Controller('notification')
export class NotificationController {
  private logger = new Logger('NotificationController');
  @Post()
  AddNotificacion(@Body() notification: any,@Headers() headers: any,@Req() request: any): Notificacion {
    console.log("Rest:",rest);
    console.log("Headers:",headers);
    console.log("Event:",notification);
    return notification;
  }
}
