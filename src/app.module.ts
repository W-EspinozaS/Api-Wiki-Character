import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { AdministradorModule } from './administrador/administrador.module';
dotenv.config();

@Module({
  imports: [CharacterModule, MongooseModule.forRoot(process.env.STRING_CONECTION),
            AuthModule, AdministradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
