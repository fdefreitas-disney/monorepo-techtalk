import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersStrategy } from '../strategies/users.strategy';
import { StrategyId } from '../strategies/strategy.interface';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: StrategyId,
      useClass: UsersStrategy,
    },
  ],
})
export class UsersModule {}
