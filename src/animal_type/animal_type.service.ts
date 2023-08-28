import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType } from './schemas/animal_type.schemas';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private AnimalTypeModel: Model<AnimalType>,
  ) {}
  async create(createAnimalTypeDto: CreateAnimalTypeDto) {
    const animaltype = await this.AnimalTypeModel.create(createAnimalTypeDto);
    return animaltype;
  }
  async findAll() {
    const mealTypess = await this.AnimalTypeModel.find().exec();
    return mealTypess;
  }

  findOne(id: string) {
    return this.AnimalTypeModel.findById(id).exec();
  }

  // update(id: number, updateMealTypeDto: UpdateMealTypeDto) {
  //   return `This action updates a #${id} mealTypes`;
  // }

  remove(id: number) {
    return `This action removes a #${id} mealTypes`;
  }
}
