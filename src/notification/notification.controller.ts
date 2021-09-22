import { Controller, Body, Post, Logger } from '@nestjs/common';
import { Notificacion } from './dto/notification.dto';

@Controller('notification')
export class NotificationController {
  private logger = new Logger('NotificationController');
  @Post()
  AddNotificacion(@Body() notification: any): Notificacion {
    this.logger.log(notification);
    return notification;
  }
}
