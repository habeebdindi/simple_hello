import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  health() {
    return { status: 'ok', uptime: process.uptime() };
  }

  @Get('greet/:name')
  greet(@Param('name') name: string) {
    return { message: `Hello, ${name}!` };
  }

  @Post('echo')
  echo(@Body() body: unknown) {
    return { received: body };
  }
}
