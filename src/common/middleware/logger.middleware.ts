import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

export class LoggerMiddleware2 implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...2');
    next();
  }
}
