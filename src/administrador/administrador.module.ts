import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Administrador, AdministradorSchema } from './entities/administrador.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Administrador.name, schema: AdministradorSchema}])],
  controllers: [AdministradorController],
  providers: [AdministradorService],
  exports: [AdministradorService],
})
export class AdministradorModule {}
