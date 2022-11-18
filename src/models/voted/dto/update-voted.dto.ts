import { PartialType } from '@nestjs/mapped-types';
import { CreateVotedDto } from './create-voted.dto';

export class UpdateVotedDto extends PartialType(CreateVotedDto) {}
