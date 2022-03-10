import { randomUUID } from 'crypto';

export type BaseEntityDTO = {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  updatedBy?: string;
  deletedAt?: Date;
  deletedBy?: string;
};

export type BaseEntityProps = {
  id?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
  deletedAt?: Date;
};

export abstract class BaseEntity {
  protected readonly id: string;
  protected readonly createdAt: Date;
  protected updatedAt?: Date;
  protected updatedBy?: string;
  protected readonly deletedAt?: Date;
  protected readonly deletedBy?: string;

  constructor(props: BaseEntityProps) {
    this.id = props.id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedBy = props.updatedBy;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  }

  public getId(): string {
    return this.id;
  }
}
