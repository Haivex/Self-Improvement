import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}
  @Get()
  @Render('pages/home')
  index() {
    return { msg: 'Haivex' };
  }
}
