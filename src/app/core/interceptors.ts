import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { LoggerInterceptor } from "./logger.interceptor";

export const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
 { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
]
