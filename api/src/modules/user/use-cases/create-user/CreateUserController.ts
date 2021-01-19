import { BaseController } from '@/core/base/BaseController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Prisma } from '@prisma/client';

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: Prisma.UserCreateArgs): Promise<any> {
    try {
      const result = await this.useCase.execute(req);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok<any>(result.value.getValue());
      }
    } catch (err) {
      return this.fail(err);
    }
  }
}
