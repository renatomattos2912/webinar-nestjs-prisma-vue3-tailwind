import { PrismaService } from '@/core/base/PrismaService';
import { UserService } from '../../service/UserService';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const prismaService = new PrismaService();
const userService = new UserService(prismaService);
const createUserUseCase = new CreateUserUseCase(userService);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
