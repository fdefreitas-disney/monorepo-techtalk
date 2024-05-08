import { Injectable } from '@nestjs/common';
import { Strategy } from './strategy.interface';

@Injectable()
export class ProductsStrategy implements Strategy {
  getName(): string {
    return 'Products';
  }
}
