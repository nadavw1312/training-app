import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.repo.save(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.repo.findOne({ where: { email } });
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.repo.find();
  }
}
