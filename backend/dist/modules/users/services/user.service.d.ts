import { UserRepository } from '../repositories/user.repository';
import { UserDm } from '../dms/user.dm';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    create(dm: UserDm): Promise<UserDm>;
    findByEmail(email: string): Promise<UserDm | null>;
    findById(id: string): Promise<UserDm | null>;
    findAll(): Promise<UserDm[]>;
}
