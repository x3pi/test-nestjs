import { ApiProperty } from '@nestjs/swagger';

export class CreateVotedDto {
  @ApiProperty()
  cat: string;

  @ApiProperty()
  use: number;

  @ApiProperty()
  status: boolean;
}
