import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService,) {}
  @Get('products')
  async getHello() {
    const crateProduct = await this.prisma.product.create({
      data: {
        id: '1',
        name: 'Banana',
        function: 'Melhorar as pernas',
      },
    });

    return crateProduct;
  }
}
