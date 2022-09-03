import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdministradorModule } from 'src/administrador/administrador.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Administrador, AdministradorSchema } from 'src/administrador/entities/administrador.entity';
import * as dotenv from 'dotenv';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
dotenv.config();

@Module({
  imports:[AdministradorModule, PassportModule, JwtModule.register({
  secret: process.env.AUTH_KEY, signOptions: {expiresIn: "2days"},}),
  MongooseModule.forFeature([{name: Administrador.name, schema: AdministradorSchema}])],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
