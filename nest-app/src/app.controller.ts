import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('/users')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get(':id')
//   getHello(@Param() params): string {
//     console.log(params.id); //1
//     return this.appService.getHello();
//   }
//   //localhost:3000/users/1
// }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
