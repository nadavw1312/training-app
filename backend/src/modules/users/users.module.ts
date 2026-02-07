import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserProvider } from './providers/user.provider';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserProvider, UserService, UserRepository],
  exports: [UserProvider, UserService],
})
export class UsersModule {}