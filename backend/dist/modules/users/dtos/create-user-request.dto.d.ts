import { UserRole } from '../enums/user-role.enum';
export declare class CreateUserRequestDto {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: UserRole;
}
