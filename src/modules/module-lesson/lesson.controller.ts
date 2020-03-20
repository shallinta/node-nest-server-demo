import { Controller, Get, Post, Param, Res , HttpStatus, Body} from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) { }

  @Get()
  async getAll(@Res() res) {
    const allLessons = await this.lessonService.getAll();
    res.status(HttpStatus.OK).json(allLessons);
  }

  @Get(':id')
  async get(@Res() res, @Param() params) {
    const lesson = await this.lessonService.getById(Number(params.id));
    res.status(HttpStatus.OK).json(lesson);
  }

  @Post()
  async addLesson(@Res() res, @Body('name') name) {
    const msg = await this.lessonService.add(name);
    res.status(HttpStatus.CREATED).json(msg);
  }
}
