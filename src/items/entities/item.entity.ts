import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;
}
