import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from '../model/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  findAll() {
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOneBy({ id });
  }

  persist(photoRequest: Photo) {
    return this.photoRepository.save(photoRequest);
  }

  delete(id: number) {
    return this.photoRepository.delete(id);
  }
}
