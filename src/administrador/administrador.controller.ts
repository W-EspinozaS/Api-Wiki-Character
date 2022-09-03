import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Put, UseGuards } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('administrador')
@ApiBearerAuth('JWT-auth')
@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() body: CreateAdministradorDto, @Res() res): Promise<Administrador>{

    const saltOrRounds = 10;
    const claveEncriptada = await bcrypt.hash(body.contraseña, saltOrRounds);
    body.contraseña = claveEncriptada;
    
    const user = await this.administradorService.create(body);
    return res.status(HttpStatus.OK).json({
      mensaje: 'Usuario Creado Correctamente',
      user
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() res) {
    const Users = await this.administradorService.findAll();
    return res.status(HttpStatus.OK).json({
      mensaje: 'Listado de Administradores',
      Users
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Res() res, @Param('id') id):Promise<Administrador> {
    const OneUser = await this.administradorService.findOne(id);
    if (!OneUser) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador encontrado nombre: ' +Administrador.prototype.nombre,
      OneUser
    })
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Res() res, @Param('id') id,
    @Body() updateAdministradorDto: UpdateAdministradorDto,):Promise<Administrador>{

    const updateuser = await this.administradorService.update(id, updateAdministradorDto);
    if (!updateuser) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador Actualizado',
      updateuser
    })
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Res() res, @Param('id') id) {
    const deleteuser = await this.administradorService.delete(id);
    if (!deleteuser) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador eliminado',
      deleteuser
    });
  }
}
