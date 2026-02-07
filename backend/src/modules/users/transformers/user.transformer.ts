import { UserEntity } from '../models/user.entity';
import { UserDm } from '../dms/user.dm';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';

export class UserTransformer {
  static transformDtoToDm(dto: CreateUserRequestDto): UserDm {
    const dm = new UserDm();
    dm.email = dto.email;
    dm.password = dto.password;
    dm.firstName = dto.firstName || null;
    dm.lastName = dto.lastName || null;
    dm.role = dto.role;
    dm.isActive = true;
    return dm;
  }

  static transformDmToEntity(dm: UserDm): UserEntity {
    const entity = new UserEntity();
    entity.email = dm.email;
    entity.password = dm.password;
    entity.firstName = dm.firstName || null;
    entity.lastName = dm.lastName || null;
    entity.role = dm.role;
    entity.isActive = dm.isActive;
    return entity;
  }

  static transformEntityToDm(entity: UserEntity): UserDm {
    const dm = new UserDm();
    dm.id = entity.id;
    dm.email = entity.email;
    dm.password = entity.password;
    dm.firstName = entity.firstName;
    dm.lastName = entity.lastName;
    dm.role = entity.role;
    dm.isActive = entity.isActive;
    dm.createdAt = entity.createdAt;
    dm.updatedAt = entity.updatedAt;
    return dm;
  }

  static transformDmToResponseDto(dm: UserDm): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = dm.id;
    dto.email = dm.email;
    dto.firstName = dm.firstName;
    dto.lastName = dm.lastName;
    dto.role = dm.role;
    dto.isActive = dm.isActive;
    dto.createdAt = dm.createdAt;
    dto.updatedAt = dm.updatedAt;
    return dto;
  }
}
