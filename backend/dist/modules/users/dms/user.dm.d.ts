import { UserRole } from '../enums/user-role.enum';
export declare class UserDm {
    id: string;
    email: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
