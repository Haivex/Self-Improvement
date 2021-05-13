import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  //beacasue used in auth
  exports: [UsersService]
})
export class UsersModule {}
