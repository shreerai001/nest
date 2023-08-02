import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  gender: string;

  @Column()
  @ApiProperty()
  photo: string;

  @OneToOne(() => User, (user) => user.photo, { onDelete: 'CASCADE' })
  user: User;
}
