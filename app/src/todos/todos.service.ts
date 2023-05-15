import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todos.model';
import { CreateTodoDto } from './dto/createTodo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async create(dto: CreateTodoDto) {
    return await this.todoRepository.create(dto);
  }

  async getTodosByUserId(userId: number) {
    return await this.todoRepository.findAll({
      where: { userId },
    });
  }

  async deleteTodoId(todoId: number) {
    const requestedTodo = await this.todoRepository.findByPk(todoId);

    if (!requestedTodo) {
      throw new HttpException('Задача не найдена', HttpStatus.BAD_REQUEST);
    }

    await this.todoRepository.destroy({ where: { id: todoId } });
    return `Todo with id ${todoId} was deleted successfully`;
  }

  async updateTodoCompletionById(todoId: number) {
    const requestedTodo = await this.todoRepository.findByPk(todoId);

    if (!requestedTodo) {
      throw new HttpException('Задача не найдена', HttpStatus.BAD_REQUEST);
    }

    const newCompletionValue = !requestedTodo.isDone;

    await this.todoRepository.update(
      { isDone: newCompletionValue },
      {
        where: { id: todoId },
      },
    );
  }
}
