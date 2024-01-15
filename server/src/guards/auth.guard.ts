import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (!authorization) return false;
    const [, token] = authorization.split(' ');
    if (!token) return false;
    try {
      const payload = verify(token, process.env.JWT_SECRET);
      request.user = payload;
    } catch {
      return false;
    }
    return true;
  }
}
