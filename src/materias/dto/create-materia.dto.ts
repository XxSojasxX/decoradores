import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateMateriaDto {
    @IsString()
    id: number;
    @IsString()
    nombre: string
}
