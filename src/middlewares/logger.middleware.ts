import { Injectable, NestMiddleware, Req, Next, Res } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(@Req() req, @Res() res, @Next() next) {
    console.log(new Date().toLocaleString(), res.statusCode, req.method, req.originalUrl, req.body);
    next();
  }
}