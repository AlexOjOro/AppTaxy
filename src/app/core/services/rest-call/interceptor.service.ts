import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenService: MsAdalAngular6Service) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('assets/i18n/')) { return next.handle(req); }
    
    const urlBase = req.headers.get('urlBase');
    let headersNew = new HttpHeaders();

    if (req.url.includes('applications-info')) {
      return next.handle(req);
    }
    req.headers.keys().forEach(key => {
      if (key !== 'urlBase') {
        headersNew = headersNew.append(key, req.headers.get(key));
      }
    });

    return this.tokenService.acquireToken(urlBase).pipe(
      mergeMap((token: string) => {
          const authorizedRequest = req.clone({
              headers: headersNew.append('Authorization', `Bearer ${token}`),
          });
          return next.handle(authorizedRequest);
    }));

  }

}
