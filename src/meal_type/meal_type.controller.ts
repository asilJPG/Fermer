import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MealTypeService } from './meal_type.service';
import { CreateMealTypeDto } from './dto/create-meal_type.dto';

@Controller('meal-type')
export class MealTypeController {
  constructor(private readonly mealTypeService: MealTypeService) {}

  @Post()
  create(@Body() createMealTypeDto: CreateMealTypeDto) {
    return this.mealTypeService.create(createMealTypeDto);
  }

  @Get()
  findAll() {
    return this.mealTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealTypeService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealTypeService.remove(+id);
  }
}
