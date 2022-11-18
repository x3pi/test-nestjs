import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVotedDto } from './dto/create-voted.dto';
import { UpdateVotedDto } from './dto/update-voted.dto';
import { Voted, VotedDocument } from './schemas/voted.schema';

@Injectable()
export class VotedService {
  constructor(
    @InjectModel(Voted.name) private votedModel: Model<VotedDocument>,
  ) {}

  async create(createvotedDto: CreateVotedDto): Promise<Voted> {
    const createdVoted = new this.votedModel(createvotedDto);
    return createdVoted.save();
  }

  async findAll(): Promise<Voted[]> {
    return this.votedModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} voted`;
  }

  update(id: number, updateVotedDto: UpdateVotedDto) {
    return `This action updates a #${id} voted`;
  }

  remove(id: number) {
    return `This action removes a #${id} voted`;
  }
}
