import { UserProvider } from '../providers/user.provider';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';
export declare class UserController {
    private readonly provider;
    private readonly logger;
    constructor(provider: UserProvider);
    create(dto: CreateUserRequestDto): Promise<UserResponseDto>;
    findById(id: string): Promise<UserResponseDto>;
    findAll(): Promise<UserResponseDto[]>;
}
