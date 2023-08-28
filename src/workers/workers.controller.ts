import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';

@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Post()
  create(@Body() createWorkersDto: CreateWorkerDto) {
    return this.workersService.create(createWorkersDto);
  }

  @Get()
  findAll() {
    return this.workersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workersService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWorkersDto: UpdateWorkerDto) {
  //   return this.workersService.update(+id, updateWorkersDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersService.remove(+id);
  }
}
