import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@ApiTags('character')
@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async findAll(): Promise<Character[]>{
    return  await this.characterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Character>{
    return await this.characterService.findOne(id);
  }

  @Post('/create')
  async create(@Body() body: CreateCharacterDto): Promise<Character>{
    return await this.characterService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() character: UpdateCharacterDto): Promise<Character>{
    return await this.characterService.update(id, character);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Character>{
    return await this.characterService.delete(id);
  }


 /*  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get()
  findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  } */
}
