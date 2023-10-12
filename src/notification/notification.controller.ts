import {
  Controller,
  Body,
  Post,
  Headers,
  Logger,
  Req,
  Param,
  Delete,
  Get,
  Put,
  Patch,
} from '@nestjs/common';

@Controller()
export class NotificationController {
  @Post('*/')
  Post(
    @Body() notification: any,
    @Headers() headers: any,
    @Req() request: any,
    @Param() path: string,
  ): any {
    console.log('Path:', path);
    console.log('Rest:', request.socket.remoteAddress);
    console.log('Headers:', headers);
    console.log('Event:', notification);
    return notification;
  }
  @Get('*/')
  Get(
    @Body() notification: any,
    @Headers() headers: any,
    @Req() request: any,
    @Param() path: string,
  ): any {
    console.log('Path:', path);
    console.log('Rest:', request.socket.remoteAddress);
    console.log('Headers:', headers);
    console.log('Event:', notification);
    return notification;
  }
  @Put('*/')
  Put(
    @Body() notification: any,
    @Headers() headers: any,
    @Req() request: any,
    @Param() path: string,
  ): any {
    console.log('Path:', path);
    console.log('Rest:', request.socket.remoteAddress);
    console.log('Headers:', headers);
    console.log('Event:', notification);
    return notification;
  }
  @Delete('*/')
  Delete(
    @Body() notification: any,
    @Headers() headers: any,
    @Req() request: any,
    @Param() path: string,
  ): any {
    console.log('Path:', path);
    console.log('Rest:', request.socket.remoteAddress);
    console.log('Headers:', headers);
    console.log('Event:', notification);
    return notification;
  }
  @Patch('*/')
  Patch(
    @Body() notification: any,
    @Headers() headers: any,
    @Req() request: any,
    @Param() path: string,
  ): any {
    console.log('Path:', path);
    console.log('Rest:', request.socket.remoteAddress);
    console.log('Headers:', headers);
    console.log('Event:', notification);
    return notification;
  }
}
