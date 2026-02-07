import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
export declare class UserRepository {
    private readonly repo;
    constructor(repo: Repository<UserEntity>);
    create(user: UserEntity): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
    findById(id: string): Promise<UserEntity | null>;
    findAll(): Promise<UserEntity[]>;
}
