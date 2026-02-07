"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const user_transformer_1 = require("../transformers/user.transformer");
let UserProvider = UserProvider_1 = class UserProvider {
    service;
    logger = new common_1.Logger(UserProvider_1.name);
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        try {
            this.logger.log('Creating new user', { email: dto.email });
            const existingUser = await this.service.findByEmail(dto.email);
            if (existingUser) {
                throw new common_1.HttpException('User with this email already exists', common_1.HttpStatus.CONFLICT);
            }
            const dm = user_transformer_1.UserTransformer.transformDtoToDm(dto);
            const newDm = await this.service.create(dm);
            this.logger.log('User created successfully', { userId: newDm.id });
            return user_transformer_1.UserTransformer.transformDmToResponseDto(newDm);
        }
        catch (error) {
            this.logger.error('Failed to create user', {
                error: error.message,
                email: dto.email,
            });
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Failed to create user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findById(id) {
        try {
            this.logger.log('Finding user by ID', { userId: id });
            const dm = await this.service.findById(id);
            if (!dm) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            return user_transformer_1.UserTransformer.transformDmToResponseDto(dm);
        }
        catch (error) {
            this.logger.error('Failed to find user', {
                error: error.message,
                userId: id,
            });
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Failed to find user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            this.logger.log('Finding all users');
            const dms = await this.service.findAll();
            return dms.map((dm) => user_transformer_1.UserTransformer.transformDmToResponseDto(dm));
        }
        catch (error) {
            this.logger.error('Failed to find users', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
            throw new common_1.HttpException('Failed to retrieve users', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UserProvider = UserProvider;
exports.UserProvider = UserProvider = UserProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserProvider);
//# sourceMappingURL=user.provider.js.map