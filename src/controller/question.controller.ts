import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question.entity';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Post()
  persist(@Body() question: Question) {
    return this.questionService.persist(question);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.questionService.delete(id);
  }
}
