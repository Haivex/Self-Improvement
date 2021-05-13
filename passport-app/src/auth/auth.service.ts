import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if(user && await bcrypt.compare(password, user.password)) {
        const { password, ...result} = user;
        return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = {username: user.username, sub: user.id};

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  register(userData: any): Promise<any> {
    return await this.usersService.create(userData);
  }
}
