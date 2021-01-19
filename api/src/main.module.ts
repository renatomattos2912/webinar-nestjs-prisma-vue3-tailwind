import { Module } from '@nestjs/common';
import { UserRoutes } from '@/routes/user.routes';
import { UserService } from './modules/user/service/UserService';
import { PrismaService } from './core/base/PrismaService';

@Module({
  controllers: [UserRoutes],
  providers: [UserService],
})
export class MainModule {}
