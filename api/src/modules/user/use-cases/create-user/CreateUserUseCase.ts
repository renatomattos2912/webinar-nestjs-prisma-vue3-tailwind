import { UseCase } from '@/core/base/UseCase';
import { left, right } from '@/core/base/Either';
import { AppError } from '@/core/base/AppError';
import { Result } from '@/core/base/Result';
import { UserService } from '../../service/UserService';
import { Prisma } from '@prisma/client';

export class CreateUserUseCase implements UseCase<any, any> {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async execute(req: Prisma.UserCreateArgs): Promise<any> {
    try {
      const exec = await this.userService.create(req);
      return right(Result.ok<any>(exec));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
