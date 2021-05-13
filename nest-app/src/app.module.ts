import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], //import modules
  controllers: [AppController, UsersController], //controlers, rquests handling, return response
  providers: [AppService], //service for example db connection
})
export class AppModule {}
