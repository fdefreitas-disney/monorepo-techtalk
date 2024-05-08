import { Injectable } from '@nestjs/common';
import { Strategy } from './strategy.interface';

@Injectable()
export class PaymentsStrategy implements Strategy {
  getName(): string {
    return 'Payments';
  }
}
