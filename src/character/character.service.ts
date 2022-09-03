import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './entities/character.entity';

@Injectable()
export class CharacterService {

    constructor(@InjectModel(Character.name)
    private characterModel : Model<CharacterDocument>){}

    async findAll(): Promise<Character[]>{
        return await this.characterModel.find();
      }

    async findOne(id: string): Promise<Character>{
        return await this.characterModel.findOne({_id: id});
      }

    async create(dtoCharacter: CreateCharacterDto): Promise<Character>{
      const nuevo= new this.characterModel(dtoCharacter);
      return await nuevo.save()
    }

    async update(id: string, dtoCharacter: UpdateCharacterDto): Promise<Character>{
      return await this.characterModel.findByIdAndUpdate(id, dtoCharacter, {new:true});
    }

    async delete(id:string): Promise<Character>{
      return await this.characterModel.findByIdAndRemove(id);
    }


  // create(createCharacterDto: CreateCharacterDto) {
  //   return 'This action adds a new character';
  // } 

  // findAll() {
  //   return `This action returns all character`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} character`;
  // }

  // update(id: number, updateCharacterDto: UpdateCharacterDto) {
  //   return `This action updates a #${id} character`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} character`;
  // }
}
function idCharacter(idCharacter: any, id: string): CreateCharacterDto | PromiseLike<CreateCharacterDto> {
  throw new Error('Function not implemented.');
}

