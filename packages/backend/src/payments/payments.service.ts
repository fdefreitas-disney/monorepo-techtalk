import { Inject, Injectable } from '@nestjs/common';
import { StrategyId } from '../strategy/strategy.interface';
import { PaymentsStrategy } from './payments.strategy';

@Injectable()
export class PaymentsService {
  constructor(@Inject(StrategyId) private strategy: PaymentsStrategy) {}

  getName(): string {
    return this.strategy.getName();
  }
}
