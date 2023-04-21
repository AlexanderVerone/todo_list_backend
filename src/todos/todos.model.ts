import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';

interface TodoCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'todos' })
export class Todo extends Model<Todo, TodoCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: false,
    description: 'Флаг выполнения задачи',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDone: boolean;

  @ApiProperty({
    example: 'Сходить за хлебом',
    description: 'Описание задачи',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 34235234124,
    description: 'дедлайн по задаче в unix timestamp',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  deadline: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
