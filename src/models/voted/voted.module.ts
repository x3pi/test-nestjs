import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotedService } from './voted.service';
import { VotedController } from './voted.controller';
import { Voted, VotedSchema } from './schemas/voted.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Voted.name, schema: VotedSchema }]),
  ],
  controllers: [VotedController],
  providers: [VotedService],
})
export class VotedModule {}
