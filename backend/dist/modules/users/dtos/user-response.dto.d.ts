import { UserRole } from '../enums/user-role.enum';
export declare class UserResponseDto {
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
