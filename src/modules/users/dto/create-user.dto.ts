import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "name không được để trống "}) // ko được để trống 
    name: string;

    @IsNotEmpty({message: "email không được để trống"})
    @IsEmail({}, {message: "email không đúng đinh dạng"})
    email: string;

    @IsNotEmpty({message: "pasword không được để trống"})
    password: string;

    phone: number;
    address: string;
    image: string;
}
