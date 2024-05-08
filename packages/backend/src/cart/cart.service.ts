import { Inject, Injectable } from '@nestjs/common';
import { StrategyId } from '../strategy/strategy.interface';
import { CartStrategy } from './cart.strategy';

@Injectable()
export class CartService {
  constructor(@Inject(StrategyId) private strategy: CartStrategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
