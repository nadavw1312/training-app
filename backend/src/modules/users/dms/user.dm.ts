import { UserRole } from '../enums/user-role.enum';

export class UserDm {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}