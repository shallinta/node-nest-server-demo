import { Module, MiddlewareConsumer } from '@nestjs/common';
import LessonModule from './modules/module-lesson';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [LessonModule]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
