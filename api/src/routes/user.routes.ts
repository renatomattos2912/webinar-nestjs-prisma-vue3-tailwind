import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { createUserController } from '@/modules/user/use-cases/create-user';

@Controller('/user')
export class UserRoutes {
  @Get('/all')
  async findAll(@Body() body: any, @Res() res: Response) {
    const obj = { message: 'Hello' };
    return res.status(200).json(obj);
  }

  @Post()
  async create(@Body() body: any, @Res() res: Response) {
    const user = { name: body.name, email: body.email };
    const exec = await createUserController.executeImpl({ data: user });
    return res.status(200).json(exec);
  }
}
