import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
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

  @Patch(':id')
  updateTodoCompletion(@Param() params) {
    return this.todoService.updateTodoCompletionById(params.id);
  }
}
