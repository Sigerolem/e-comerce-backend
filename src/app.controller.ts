import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('come-back')
  comeBack(@Req() req: Request): string {
    console.log(req.query, req.params, req.headers)
    return this.appService.comeBack();
  }
}
