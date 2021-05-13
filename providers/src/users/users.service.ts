import { Injectable } from '@nestjs/common';
import { User } from '../dto/user.interface';
@Injectable()
export class UsersService {
    private readonly users: User[] = []

    get() {
        return this.users;
    }

    create(user: User) {
        this.users.push(user);
        return user;
    }
}
