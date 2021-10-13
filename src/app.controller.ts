import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'os';

@Controller('/:module(app)')
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get('/')
  getHello() {
    console.log(111)
    return this.appService.getHello();
  }
}
