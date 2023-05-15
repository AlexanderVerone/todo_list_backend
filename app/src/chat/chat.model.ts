import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'chatMessages' })
export class Chat extends Model<Chat> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Новое сообщение в чате',
    description: 'Текст сообщения',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text: string;

  @ApiProperty({
    example: 54325223,
    description: 'Дата создания сообщения в unix timestamp',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  messageDate: number;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почта пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userName: string;

  @ApiProperty({
    example: 10,
    description: 'Уникальный айди пользователя',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ApiProperty({
    example: false,
    description: 'Флаг прочтения сообщения',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isRead: boolean;
}
