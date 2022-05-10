/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map } from 'rxjs';
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => classToPlain(data)));
  }
}