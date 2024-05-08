import { Controller, Get } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly service: CartService) {}

  @Get()
  getName() {
    const name = this.service.getName();
    return name;
  }
}
