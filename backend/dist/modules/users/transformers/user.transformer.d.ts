import { UserEntity } from '../models/user.entity';
import { UserDm } from '../dms/user.dm';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';
export declare class UserTransformer {
    static transformDtoToDm(dto: CreateUserRequestDto): UserDm;
    static transformDmToEntity(dm: UserDm): UserEntity;
    static transformEntityToDm(entity: UserEntity): UserDm;
    static transformDmToResponseDto(dm: UserDm): UserResponseDto;
}
