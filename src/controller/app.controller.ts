import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { User } from '../model/user.entity';

@Controller('/default')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.appService.findOne(id);
  }

  @Post()
  persist(@Body() user: User) {
    return this.appService.persist(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.appService.delete(id);
  }
}
