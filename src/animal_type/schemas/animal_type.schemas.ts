import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalTypeDocument = HydratedDocument<AnimalType>;
export class AnimalType {
  @Prop()
  name: string;
}
export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
