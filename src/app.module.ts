import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { AnimalModule } from './animal/animal.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { MealTypeModule } from './meal_type/meal_type.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkersModule,
    AnimalModule,
    AnimalTypeModule,
    MealTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
