import { Injectable } from '@nestjs/common';
import { Strategy } from './strategy.interface';

@Injectable()
export class CartStrategy implements Strategy {
  getName(): string {
    return 'Cart';
  }
}
