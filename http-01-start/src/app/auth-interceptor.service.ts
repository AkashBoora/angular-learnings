import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "token"),
    });
    console.log("Request on its way");
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        if (event.type == HttpEventType.Sent) {
          console.log(event.type);
        }
        if (event.type == HttpEventType.Response) {
          console.log('Response Arrived');
          console.log(event.body);
        }
      })
    );
  }
}
