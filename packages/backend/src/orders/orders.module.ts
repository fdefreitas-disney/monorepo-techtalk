import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { StrategyId } from '../strategies/strategy.interface';
import { OrdersStrategy } from '../strategies/orders.strategy';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: StrategyId,
      useClass: OrdersStrategy,
    },
  ],
})
export class OrdersModule {}
