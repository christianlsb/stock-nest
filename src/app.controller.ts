import { Controller, Get } from '@nestjs/common';

@Controller('teste')
export class AppController {
  @Get('hello')
  getHello(): string {
    return 'Hello World';
  }
}
