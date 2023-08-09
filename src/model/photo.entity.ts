import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  url: string;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.photos, {
    onDelete: 'CASCADE',
  })
  user: User;
}
