import { PrismaService } from '@/core/base/PrismaService';
import { Prisma, User } from '@prisma/client';

export interface IUserService {
  create(req: Prisma.UserCreateArgs): Promise<User>;
  findMany(req: Prisma.FindManyUserArgs): Promise<User[]>;
}

export class UserService implements IUserService {
  constructor(private prisma: PrismaService) {}

  create(req: Prisma.UserCreateArgs): Promise<User> {
    const prismaService = new PrismaService();
    return prismaService.user.create(req);
  }

  findMany(req: Prisma.FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(req);
  }
}
