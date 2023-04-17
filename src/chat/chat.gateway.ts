import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { NewChatMessageDto } from './dto/new-chat-message.dto';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server;

  @SubscribeMessage('newMessage')
  async handleMessage(@MessageBody() message: NewChatMessageDto) {
    const savedMessage = await this.chatService.saveNewMessage(message);
    this.server.emit('newMessage', savedMessage);
  }

  @SubscribeMessage('messageRead')
  async handleMessageStatus(@MessageBody() messageId: number) {
    await this.chatService.changeMessageIsReadStatus(messageId);
    this.server.emit('messageRead', messageId);
  }
}
