import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HotelsService {
  constructor(private prisma: PrismaService) {}

  async getAllHotels() {
    const hotels = await this.prisma.hotel.findMany({});
    return hotels;
  }

  async createHotel(data: Prisma.HotelCreateInput) {
    try {
      await this.prisma.hotel.create({ data });
      return 'Hotel created successfully';
    } catch (error: unknown) {
      console.log(error);
      return new HttpException(
        'Can not connect to database',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async deleteHotel(id: string) {
    try {
      await this.prisma.hotel.delete({
        where: { id },
      });
      return 'Hotel deleted successfully';
    } catch (error: unknown) {
      console.log(error);
      return new HttpException(
        'Can not delete the hotel',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
