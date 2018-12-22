import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "Accept": "application/json"
            }
        });

        return next.handle(req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    let newEvent;

                    if (event instanceof HttpResponse) {
                        if (event.body instanceof Blob) {
                            newEvent = event.clone({
                                body: event.body
                            });
                        } else {
                            newEvent = event.clone({
                                body: {
                                    data: event.body.data,
                                    meta: event.body.meta
                                }
                            });
                        }
                    }

                    return newEvent;
                })
            );
    }
}
