import { Injectable } from '@nestjs/common';
import { Strategy } from './strategy.interface';

@Injectable()
export class OrdersStrategy implements Strategy {
  getName(): string {
    return 'Orders';
  }
}
