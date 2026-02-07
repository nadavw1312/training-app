"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransformer = void 0;
const user_entity_1 = require("../models/user.entity");
const user_dm_1 = require("../dms/user.dm");
const user_response_dto_1 = require("../dtos/user-response.dto");
class UserTransformer {
    static transformDtoToDm(dto) {
        const dm = new user_dm_1.UserDm();
        dm.email = dto.email;
        dm.password = dto.password;
        dm.firstName = dto.firstName;
        dm.lastName = dto.lastName;
        dm.role = dto.role;
        dm.isActive = true;
        return dm;
    }
    static transformDmToEntity(dm) {
        const entity = new user_entity_1.UserEntity();
        entity.email = dm.email;
        entity.password = dm.password;
        entity.firstName = dm.firstName;
        entity.lastName = dm.lastName;
        entity.role = dm.role;
        entity.isActive = dm.isActive;
        return entity;
    }
    static transformEntityToDm(entity) {
        const dm = new user_dm_1.UserDm();
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
    static transformDmToResponseDto(dm) {
        const dto = new user_response_dto_1.UserResponseDto();
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
exports.UserTransformer = UserTransformer;
//# sourceMappingURL=user.transformer.js.map