import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs";
import { TokenService } from "../services/token/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!!TokenService.getAuthToken()) {
            req = req.clone({
                setHeaders: TokenService.getAuthHeader()
            });
        }
        return next.handle(req);
    }
}
