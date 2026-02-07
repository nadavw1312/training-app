import { Controller, Get, Post, Body, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserProvider } from '../providers/user.provider';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { UserResponseDto } from '../dtos/user-response.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly provider: UserProvider) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully', type: UserResponseDto })
  @ApiResponse({ status: 409, description: 'User with this email already exists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() dto: CreateUserRequestDto): Promise<UserResponseDto> {
    this.logger.log('Received create user request', { email: dto.email });
    return await this.provider.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User found', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    this.logger.log('Received get user request', { userId: id });
    return await this.provider.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully', type: [UserResponseDto] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<UserResponseDto[]> {
    this.logger.log('Received get all users request');
    return await this.provider.findAll();
  }
}