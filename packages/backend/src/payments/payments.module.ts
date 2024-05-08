import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { StrategyId } from '../strategies/strategy.interface';
import { PaymentsStrategy } from '../strategies/payments.strategy';

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
