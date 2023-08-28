import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;
@Schema()
export class Animal {
  @Prop()
  name: string;
  @Prop()
  age: bigint;
  @Prop()
  gender: string;
  @Prop()
  weight: string;
  @Prop()
  animal_type_id: bigint;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
