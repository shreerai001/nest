import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

  @ApiProperty()
  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
    cascade: true,
  })
  profile: Profile;
}
