import { Inject, Injectable } from '@nestjs/common';
import { StrategyId } from '../strategy/strategy.interface';
import { UsersStrategy } from './users.strategy';

@Injectable()
export class UsersService {
  constructor(@Inject(StrategyId) private strategy: UsersStrategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
