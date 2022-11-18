import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VotedDocument = Voted & Document;

@Schema()
export class Voted {
  @Prop({ type: String, required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  status: boolean;
}

export const VotedSchema = SchemaFactory.createForClass(Voted);
