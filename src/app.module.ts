import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CharacterModule, MongooseModule.forRoot("mongodb+srv://adminV:DROseXb9rr3RSJhB@apiwiki.yw1c8ms.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
