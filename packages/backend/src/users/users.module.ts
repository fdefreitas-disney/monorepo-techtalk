import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersStrategy } from './users.strategy';
import { StrategyId } from '../strategy/strategy.interface';

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
