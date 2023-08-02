import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './model/user.entity';
import { Photo } from './model/photo.entity';
import { Profile } from './model/profile.entity';
import { Author } from './model/author.entity';
import { AuthorController } from './controller/author.controller';
import { AuthorService } from './service/author.service';
import { PhotoController } from './controller/photo.controller';
import { PhotoService } from './service/photo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Photo, Profile, Author]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Photo, Profile, Author],
      synchronize: true,
    }),
  ],
  controllers: [AppController, AuthorController, PhotoController],
  providers: [AppService, AuthorService, PhotoService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
