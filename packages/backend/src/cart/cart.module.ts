import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { StrategyId } from '../strategy/strategy.interface';
import { CartStrategy } from './cart.strategy';

@Module({
  controllers: [CartController],
  providers: [
    CartService,
    {
      provide: StrategyId,
      useClass: CartStrategy,
    },
  ],
})
export class CartModule {}
