import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column("boolean", { default: true })
  isRunning: boolean;

  @CreateDateColumn()
  startedAt: Date;

  @UpdateDateColumn({ nullable: true })
  finishedAt: Date | null;

  constructor(name: string) {
    this.name = name;
    this.finishedAt = null;
  }
}
