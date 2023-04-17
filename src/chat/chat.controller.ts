import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { NewChatMessageDto } from './dto/new-chat-message.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('chatMessages')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  chatMessages() {
    return this.chatService.getChatMessages();
  }

  @Post()
  saveNewMessage(@Body() dto: NewChatMessageDto) {
    return this.chatService.saveNewMessage(dto);
  }
}
