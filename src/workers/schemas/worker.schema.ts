import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkerDocument = HydratedDocument<Worker>;
@Schema()
export class Worker {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  expirience: string;
  @Prop()
  phone_number: string;
  @Prop()
  username: string;
  @Prop()
  worker_schedule: string;
  @Prop()
  block_id: string;
}
export const WorkerSchema = SchemaFactory.createForClass(Worker);
