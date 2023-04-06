import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

  @Get(':id')
  getUserTodos(@Param() params) {
    return this.todoService.getTodosByUserId(params.id);
  }

  @Delete(':id')
  deleteTodo(@Param() params) {
    return this.todoService.deleteTodoId(params.id);
  }
}
