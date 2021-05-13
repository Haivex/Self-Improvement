import { Global, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

//if global decorator then we have not to import module in every place
@Global()
@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [], //if import other modules it also can exports modules
  exports: [UsersService], // if other module import users module then users service is included
})
export class UsersModule {}
