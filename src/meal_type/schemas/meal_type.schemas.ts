import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealTypeDocument = HydratedDocument<MealType>;
@Schema()
export class MealType {
  @Prop()
  name: string;
}
export const MealTypeSchema = SchemaFactory.createForClass(MealType);
