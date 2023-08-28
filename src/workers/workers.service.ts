import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { Worker } from './schemas/worker.schema';
@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Worker.name) private WorkersModel: Model<Worker>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const worker = await this.WorkersModel.create(createWorkerDto);
    return worker;
  }
  async findAll() {
    const workerss = await this.WorkersModel.find().exec();
    return workerss;
  }

  findOne(id: string) {
    return this.WorkersModel.findById(id).exec();
  }

  // update(id: number, updateWorkerDto: UpdateWorkerDto) {
  //   return `This action updates a #${id} workers`;
  // }

  remove(id: number) {
    return `This action removes a #${id} workers`;
  }
}
