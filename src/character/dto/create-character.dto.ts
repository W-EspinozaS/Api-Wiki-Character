import { ApiProperty } from "@nestjs/swagger";

export class Apariciones{
    @ApiProperty()
    idAparicion: number;
    @ApiProperty()
    pelicula:    string;
    @ApiProperty()
    estreno:     string;
    @ApiProperty()
    sinopsis:    string;
}

export class CreateCharacterDto {

    @ApiProperty()
    readonly nombre:      string;
    @ApiProperty()
    readonly alias:       string;
    @ApiProperty()
    readonly descripcion: string;
    @ApiProperty()
    readonly foto:        string;
    @ApiProperty()
    readonly lanzamiento: string;
    @ApiProperty()
    readonly status:      string;
    @ApiProperty()
    readonly apariciones: Apariciones[];
}
