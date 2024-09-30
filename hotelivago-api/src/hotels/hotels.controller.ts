import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { Prisma } from '@prisma/client';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  getAllHotels() {
    return this.hotelsService.getAllHotels();
  }

  @Post()
  createHotel(@Body() createHotelDto: Prisma.HotelCreateInput) {
    return this.hotelsService.createHotel(createHotelDto);
  }

  @Delete(':id')
  deleteHotel(@Param('id') id: string) {
    return this.hotelsService.deleteHotel(id);
  }

  // @Post()
  // create(@Body() createHotelDto: CreateHotelDto) {
  //   return this.hotelsService.create(createHotelDto);
  // }

  // @Get()
  // findAll() {
  //   return this.hotelsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.hotelsService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.hotelsService.remove(+id);
  // }
}
