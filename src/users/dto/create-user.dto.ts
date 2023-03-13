import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Электронный почтовый адрес',
  })
  readonly email: string;
  @ApiProperty({ example: '1234567', description: 'Пароль' })
  readonly password: string;
}
