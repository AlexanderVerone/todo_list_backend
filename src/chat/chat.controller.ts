import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { NewChatMessageDto } from './dto/new-chat-message.dto';

@Controller('chatMessages')
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
