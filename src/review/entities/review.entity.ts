import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: string;

  @Column('real')
  rating: number;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column({ default: 0 })
  likeCount: number;

  @Column()
  director: string;
}
