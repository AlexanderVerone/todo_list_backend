import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todos.model';
import { User } from '../users/users.model';

@Module({
  providers: [TodosService],
  controllers: [TodosController],
  imports: [SequelizeModule.forFeature([User, Todo])],
})
export class TodosModule {}
