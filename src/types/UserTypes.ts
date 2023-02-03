import { User } from '@prisma/client';

export type UserCreationDto = Omit<User, "id">;