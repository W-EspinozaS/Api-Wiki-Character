import { PartialType } from '@nestjs/swagger';
import { CreateAdministradorDto } from './create-administrador.dto';

export class UpdateAdministradorDto extends PartialType(CreateAdministradorDto) {}
