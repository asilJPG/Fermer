import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.schemas';
import { AnimalTypeSchema } from '../animal_type/schemas/animal_type.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Animal.name, schema: AnimalTypeSchema },
    ]),
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
