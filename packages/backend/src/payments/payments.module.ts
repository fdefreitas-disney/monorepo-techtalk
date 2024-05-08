import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { StrategyId } from '../strategy/strategy.interface';
import { PaymentsStrategy } from './payments.strategy';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    {
      provide: StrategyId,
      useClass: PaymentsStrategy,
    },
  ],
})
export class PaymentsModule {}
