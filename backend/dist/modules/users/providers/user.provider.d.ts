import { UserService } from '../services/user.service';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';
export declare class UserProvider {
    private readonly service;
    private readonly logger;
    constructor(service: UserService);
    create(dto: CreateUserRequestDto): Promise<UserResponseDto>;
    findById(id: string): Promise<UserResponseDto>;
    findAll(): Promise<UserResponseDto[]>;
}
