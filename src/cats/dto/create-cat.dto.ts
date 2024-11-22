import { 
    IsInt, 
    IsOptional, 
    IsPositive, 
    IsString, 
    MinLength,
} from "class-validator";
import { Breed } from "src/breeds/entities/breed.entity";

export class CreateCatDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsInt()
    @IsPositive()
    age: number;

    @IsOptional()
    breed: Breed;

}
