import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../model/photo.entity';

@Controller('/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.photoService.findOne(id);
  }

  @Post()
  persist(@Body() photo: Photo) {
    return this.photoService.persist(photo);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.photoService.delete(id);
  }
}
