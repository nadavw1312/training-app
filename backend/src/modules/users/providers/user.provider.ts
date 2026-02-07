import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';
import { UserTransformer } from '../transformers/user.transformer';

@Injectable()
export class UserProvider {
  private readonly logger = new Logger(UserProvider.name);

  constructor(private readonly service: UserService) {}

  async create(dto: CreateUserRequestDto): Promise<UserResponseDto> {
    try {
      this.logger.log('Creating new user', { email: dto.email });

      // Check if user already exists
      const existingUser = await this.service.findByEmail(dto.email);
      if (existingUser) {
        throw new HttpException('User with this email already exists', HttpStatus.CONFLICT);
      }

      const dm = UserTransformer.transformDtoToDm(dto);
      const newDm = await this.service.create(dm);
      
      this.logger.log('User created successfully', { userId: newDm.id });
      return UserTransformer.transformDmToResponseDto(newDm);
    } catch (error) {
      this.logger.error('Failed to create user', {
        error: error.message,
        email: dto.email,
      });
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<UserResponseDto> {
    try {
      this.logger.log('Finding user by ID', { userId: id });
      
      const dm = await this.service.findById(id);
      if (!dm) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return UserTransformer.transformDmToResponseDto(dm);
    } catch (error) {
      this.logger.error('Failed to find user', {
        error: error.message,
        userId: id,
      });
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to find user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<UserResponseDto[]> {
    try {
      this.logger.log('Finding all users');
      
      const dms = await this.service.findAll();
      return dms.map(UserTransformer.transformDmToResponseDto);
    } catch (error) {
      this.logger.error('Failed to find users', { error: error.message });
      throw new HttpException(
        'Failed to retrieve users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}