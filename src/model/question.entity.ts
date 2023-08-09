import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  text: string;

  @ApiProperty()
  @ManyToMany(() => Category, { cascade: true, eager: true })
  @JoinTable()
  categories: Category[];
}
