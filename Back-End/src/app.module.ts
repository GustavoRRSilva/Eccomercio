import { Module } from '@nestjs/common';
import { UsersController } from './Controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
