import { Inject, Injectable } from '@nestjs/common';
import { Strategy, StrategyId } from '../strategies/strategy.interface';

@Injectable()
export class OrdersService {
  constructor(@Inject(StrategyId) private strategy: Strategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
