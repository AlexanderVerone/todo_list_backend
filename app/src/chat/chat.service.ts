import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chat } from './chat.model';
import { NewChatMessageDto } from './dto/newChatMessage.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat) private chatRepository: typeof Chat) {}

  async getChatMessages() {
    return await this.chatRepository.findAll();
  }

  async saveNewMessage(dto: NewChatMessageDto) {
    return await this.chatRepository.create(dto);
  }

  async changeMessageIsReadStatus(messageId: number) {
    return await this.chatRepository.update(
      {
        isRead: true,
      },
      {
        where: { id: messageId },
      },
    );
  }
}
