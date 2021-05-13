import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './dto/user.interface';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<User[]> {
    return this.usersService.get();
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    this.usersService.create(createUserDTO);
    return true;
  }
}
