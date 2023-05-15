import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { NewChatMessageDto } from './dto/newChatMessage.dto';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Chat } from './chat.model';

@ApiTags('Чат')
@Controller('chatMessages')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private chatService: ChatService) {}

  @ApiOperation({ summary: 'Получить все сообщения чата' })
  @ApiResponse({ status: 200, type: Chat })
  @Get()
  chatMessages() {
    return this.chatService.getChatMessages();
  }

  @ApiOperation({ summary: 'Сохранить новое сообщение' })
  @ApiResponse({ status: 201 })
  @Post()
  saveNewMessage(@Body() dto: NewChatMessageDto) {
    return this.chatService.saveNewMessage(dto);
  }
}
