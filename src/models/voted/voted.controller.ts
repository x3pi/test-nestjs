import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/authentication/role/role.enum';
import { Roles } from 'src/authentication/role/roles.decorator';
import { VotedService } from './voted.service';
import { CreateVotedDto } from './dto/create-voted.dto';
import { UpdateVotedDto } from './dto/update-voted.dto';
import { Voted } from './interfaces/voted.interface';

@Controller('voted')
@ApiTags('voted')
export class VotedController {
  constructor(private readonly votedService: VotedService) {}

  @Post()
  @Roles(Role.User)
  async create(@Body() createCatDto: CreateVotedDto) {
    console.log(createCatDto);
    return this.votedService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Voted[]> {
    return this.votedService.findAll();
  }

  @Get(':id')
  @Roles(Role.User)
  findOne(@Param('id') id: string) {
    return this.votedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotedDto: UpdateVotedDto) {
    return this.votedService.update(+id, updateVotedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votedService.remove(+id);
  }
}
