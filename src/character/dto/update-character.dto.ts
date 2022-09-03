import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDto } from './create-character.dto';

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {
    // readonly nombre:      string;
    // readonly alias:       string;
    // readonly descripcion: string;
    // readonly foto:        string;
    // readonly lanzamiento: string;
    // readonly status:      string;
    // readonly apariciones: CreateAparicioneDto[];
}
