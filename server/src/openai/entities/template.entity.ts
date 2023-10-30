import { ObjectId } from 'mongodb';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'templateData' })
export class Template {
  @ObjectIdColumn()
  templateID: ObjectId;

  @Column({ name: 'images' })
  images: string[];

  @Column({ name: 'template' })
  template: string;

  @Column({ name: 'metadata' })
  metadata: object;

  /* Create and Update Date columns */
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
