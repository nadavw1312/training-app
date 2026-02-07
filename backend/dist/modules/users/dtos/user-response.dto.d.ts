import { UserRole } from '../enums/user-role.enum';
export declare class UserResponseDto {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
