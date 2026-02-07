import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import { UserDm } from '../dms/user.dm';
import { UserTransformer } from '../transformers/user.transformer';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(dm: UserDm): Promise<UserDm> {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(dm.password, 10);
    dm.password = hashedPassword;

    const entity = UserTransformer.transformDmToEntity(dm);
    const newEntity = await this.repository.create(entity);
    return UserTransformer.transformEntityToDm(newEntity);
  }

  async findByEmail(email: string): Promise<UserDm | null> {
    const entity = await this.repository.findByEmail(email);
    return entity ? UserTransformer.transformEntityToDm(entity) : null;
  }

  async findById(id: string): Promise<UserDm | null> {
    const entity = await this.repository.findById(id);
    return entity ? UserTransformer.transformEntityToDm(entity) : null;
  }

  async findAll(): Promise<UserDm[]> {
    const entities = await this.repository.findAll();
    return entities.map((entity) =>
      UserTransformer.transformEntityToDm(entity),
    );
  }
}
