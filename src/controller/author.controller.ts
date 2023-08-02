import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/author.entity';

@Controller('/author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.authorService.findOne(id);
  }

  @Post()
  persist(@Body() author: Author) {
    return this.authorService.persist(author);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.authorService.delete(id);
  }
}
