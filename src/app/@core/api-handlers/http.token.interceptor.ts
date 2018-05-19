import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtService } from './jwt.service';
import { CustomHeaderService } from './custom-header.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private customHeaderService: CustomHeaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting the request');
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
      headersConfig['x-access-token'] = token;
    }
    console.log('Interception done, modified header config ', headersConfig);
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
