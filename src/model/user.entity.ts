import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @JoinColumn({ name: 'photoUri' })
  @OneToOne(() => Photo, (photo) => photo.user, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @ApiProperty()
  photo: Photo;

  @JoinColumn({ name: 'profileUri' })
  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @ApiProperty()
  profile: Profile;
}
