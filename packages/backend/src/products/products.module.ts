import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { StrategyId } from '../strategies/strategy.interface';
import { ProductsStrategy } from '../strategies/products.strategy';

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
