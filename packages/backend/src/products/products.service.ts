import { Inject, Injectable } from '@nestjs/common';
import { StrategyId } from '../strategy/strategy.interface';
import { ProductsStrategy } from './products.strategy';

@Injectable()
export class ProductsService {
  constructor(@Inject(StrategyId) private strategy: ProductsStrategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
