import { Entity } from "typeorm";
import { IsString, MinLength } from "class-validator";

@Entity()
export class CreateBreedDto {

    @IsString()
    @MinLength(3)
    name: string;
    
}
