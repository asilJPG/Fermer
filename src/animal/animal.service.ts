import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.schemas';
import { Model } from 'mongoose';

@Injectable()
export class AnimalService {
  constructor(@InjectModel(Animal.name) private AnimalModel: Model<Animal>) {}
  async create(createAnimalDto: CreateAnimalDto) {
    const animal = this.AnimalModel.create(createAnimalDto);
    return animal;
  }
  async findAll() {
    const animals = this.AnimalModel.find().exec();
    return animals;
  }
  async findOne(id: string) {
    const animal = await this.AnimalModel.findById(id).exec();
    return animal;
  }

  remove(id: number) {
    return `This action removes a #${id} workers`;
  }
}
