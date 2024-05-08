import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { StrategyId } from '../strategy/strategy.interface';
import { ProductsStrategy } from './products.strategy';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: StrategyId,
      useClass: ProductsStrategy,
    },
  ],
})
export class ProductsModule {}
