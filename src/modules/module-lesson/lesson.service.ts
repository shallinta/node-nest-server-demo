import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class LessonService {
  private allLessons = [
    { id: 1, name: 'english' },
    { id: 2, name: 'math' },
    { id: 3, name: 'chinese' },
  ];

  getAll() {
    return Promise.resolve(this.allLessons);
  }

  getById(id: number) {
    const lesson = this.allLessons.find(lesson => lesson.id === id);
    if (!lesson) {
      throw new HttpException('Lesson not found', 404);
    }
    return Promise.resolve(lesson);
  }

  add(name: string) {
    const len = this.allLessons.length;
    const nextId = len > 0 ? this.allLessons[len - 1].id + 1 : 1;
    this.allLessons.push({
      id: nextId,
      name,
    });
    return Promise.resolve();
  }
}
