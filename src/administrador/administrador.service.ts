import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador, AdministradorDocument } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {

  constructor(@InjectModel(Administrador.name)
  private readonly administradorModel: Model<AdministradorDocument>){}

  async findAll(): Promise<Administrador[]> {
    return await this.administradorModel.find();
  }

  async findOne(id: string): Promise<Administrador> {
    return await this.administradorModel.findById(id);
  }

  async create(dtoAdministrador: CreateAdministradorDto): Promise<Administrador> {
    const nuevo = new this.administradorModel(this.administradorModel);
    return await nuevo.save();
  }

  async getAdmin(user): Promise<Administrador> {
    //find by username
    return await this.administradorModel.findOne({ usuario: user });
  }
  async update(id: string, updateAdministradorDto: UpdateAdministradorDto) {
    return await this.administradorModel.findByIdAndUpdate(id, updateAdministradorDto, {new: true,});
  }

  async delete(id: string) {
    return await this.administradorModel.findByIdAndDelete(id);
  }
 
}

