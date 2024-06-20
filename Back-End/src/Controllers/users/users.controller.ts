import { Controller, Get } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(): string {
        return "Todos os users estão aqui"
    }
}
