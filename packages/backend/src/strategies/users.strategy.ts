import { Injectable } from '@nestjs/common';
import { Strategy } from './strategy.interface';

@Injectable()
export class UsersStrategy implements Strategy {
  getName(): string {
    return 'Users';
  }
}
