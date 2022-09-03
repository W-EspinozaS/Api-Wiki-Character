import { ApiProperty } from "@nestjs/swagger";

export class CreateAdministradorDto {
    @ApiProperty()
    nombre: String;
    @ApiProperty()
    email: String;
    @ApiProperty()
    usuario: String;
    @ApiProperty()
    contraseña: String;
}
