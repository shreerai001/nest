import { PhotoService } from '../service/photo.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Photo } from '../model/photo.entity';

@Controller('/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Post()
  persis(@Body() photo: Photo) {
    return this.photoService.persist(photo);
  }
}
