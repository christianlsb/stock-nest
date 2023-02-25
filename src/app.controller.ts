import { Controller, Get, Body } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateProduct } from './dtos/create-product';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('products')
  async getHello(@Body() body: CreateProduct) {
    const {name, function: productFunction} = body;

      console.log(body)
    const crateProduct = await this.prisma.product.create({
      data: {
        id: randomUUID(),
        name: 'Banana',
        function: productFunction,
      },
    });

    return crateProduct;
  }
}
