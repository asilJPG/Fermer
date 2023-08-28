import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private AdminModel: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      return new BadRequestException('password is not mach');
    }
    const hashed_password = await bcrypt.hash(password, 7);

    const createAdmin = await this.AdminModel.create({
      ...createAdminDto,
      hashed_password,
    });
    // const createAdmin = new this.AdminModel({
    //   ...createAdminDto,
    //   hashed_password: hashed_password,
    // }).save();
    const tokens = await this.getTokens(createAdmin);

    console.log(tokens);

    const hashed_token = await bcrypt.hash(tokens.refresh_Token, 7);

    const updateAdmin = await this.AdminModel.findByIdAndUpdate(
      createAdmin._id,
      { hashed_token },
      { new: true },
    );
    return updateAdmin;
  }
  async findAll() {
    const admins = await this.AdminModel.find().exec();
    return admins;
  }

  findOne(id: string) {
    return this.AdminModel.findById(id).exec();
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

  async getTokens(admin: AdminDocument) {
    const jwtpayload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtpayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtpayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_Token: accessToken,
      refresh_Token: refreshToken,
    };
  }
}
