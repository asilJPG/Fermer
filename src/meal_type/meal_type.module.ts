import { Module } from '@nestjs/common';
import { MealTypeService } from './meal_type.service';
import { MealTypeController } from './meal_type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MealType, MealTypeSchema } from './schemas/meal_type.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MealType.name, schema: MealTypeSchema },
    ]),
  ],
  controllers: [MealTypeController],
  providers: [MealTypeService],
})
export class MealTypeModule {}
