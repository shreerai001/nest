import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne(() => Author, (author) => author.photos, {
    onDelete: 'CASCADE',
  })
  author: Author;

  @OneToOne(() => User, (user) => user.photo, { onDelete: 'CASCADE' })
  user: User;
}
