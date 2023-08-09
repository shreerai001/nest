import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './model/user.entity';
import { Profile } from './model/profile.entity';
import { Photo } from './model/photo.entity';
import { PhotoService } from './service/photo.service';
import { PhotoController } from './controller/photo.controller';
import { Category } from './model/category.entity';
import { Question } from './model/question.entity';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';
import { QuestionService } from './service/question.service';
import { QuestionController } from './controller/question.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, Photo, Category, Question]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest_type_testtt',
      entities: [User, Profile, Photo, Category, Question],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    PhotoController,
    CategoryController,
    QuestionController,
  ],
  providers: [AppService, PhotoService, CategoryService, QuestionService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
