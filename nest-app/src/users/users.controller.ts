import { Controller, Get } from '@nestjs/common';
@Controller('users')
export class UsersController {
  @Get()
  //@HttpCode(204)
  //@Header('Cache-Control', 'none')
  index() {
    //nest automatically sets headers etc
    return [
      {
        id: 1,
        name: 'Haivex',
      },
      {
        id: 2,
        name: 'Zovex',
      },
    ];
  }
}

// @Controller('users')
// export class UsersController {
//   @Get()
//   index(@Res() response) {
//     //decorators status codes and headers are ignored
//     response.status(200).send('Haivex');
//   }
// }

// @Controller('users')
// export class UsersController {
//   @Get(':id')
//   index(@Req() request: Request) {
//     //return request.params.id;
//     return request.query.name;
//   }
// }

// @Controller('users')
// export class UsersController {
//   @Get()
//   @Redirect('https://google.com', 301)
//   index() {
//     return 'ok';
//   }
//   @Post()
//   show(@Body() createUserDto: CreateUserDto) {
//     return createUserDto;
//   }
// }
