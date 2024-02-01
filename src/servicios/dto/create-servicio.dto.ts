import { ApiProperty } from "@nestjs/swagger";

export class CreateServicioDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    address: string;
}
