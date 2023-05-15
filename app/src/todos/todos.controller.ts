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
import { CreateTodoDto } from './dto/createTodo.dto';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './todos.model';

@ApiTags('Списки задач Todo')
@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private todoService: TodosService) {}

  @ApiOperation({ summary: 'Создать новую задачу' })
  @ApiResponse({ status: 201 })
  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

  @ApiOperation({ summary: 'Получить список задач пользователя' })
  @ApiResponse({ status: 200, type: Todo })
  @Get(':id')
  getUserTodos(@Param() params) {
    return this.todoService.getTodosByUserId(params.id);
  }

  @ApiOperation({ summary: 'Удалить задачу по её ID' })
  @Delete(':id')
  deleteTodo(@Param() params) {
    return this.todoService.deleteTodoId(params.id);
  }

  @ApiOperation({ summary: 'Обновить статус выполнения задачи' })
  @Patch(':id')
  updateTodoCompletion(@Param() params) {
    return this.todoService.updateTodoCompletionById(params.id);
  }
}
