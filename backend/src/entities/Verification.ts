import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Verification {
  @PrimaryColumn({ type: 'text' })
  email: string;

  @Column({ type: 'varchar', length: 4 })
  code: string;

  @Column({ type: 'varchar' })
  phone: string;
}
