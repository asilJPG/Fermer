import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateMealTypeDto } from './dto/create-meal_type.dto';
import { MealType } from './schemas/meal_type.schemas';
@Injectable()
export class MealTypeService {
  constructor(
    @InjectModel(MealType.name) private MealTypesModel: Model<MealType>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createMealTypeDto: CreateMealTypeDto) {
    const mealType = await this.MealTypesModel.create(createMealTypeDto);
    return mealType;
  }
  async findAll() {
    const mealTypess = await this.MealTypesModel.find().exec();
    return mealTypess;
  }

  findOne(id: string) {
    return this.MealTypesModel.findById(id).exec();
  }

  // update(id: number, updateMealTypeDto: UpdateMealTypeDto) {
  //   return `This action updates a #${id} mealTypes`;
  // }

  remove(id: number) {
    return `This action removes a #${id} mealTypes`;
  }
}
