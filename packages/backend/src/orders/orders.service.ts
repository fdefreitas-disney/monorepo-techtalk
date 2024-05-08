import { Inject, Injectable } from '@nestjs/common';
import { StrategyId } from '../strategy/strategy.interface';
import { OrdersStrategy } from './orders.strategy';

@Injectable()
export class OrdersService {
  constructor(@Inject(StrategyId) private strategy: OrdersStrategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
