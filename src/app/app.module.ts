import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { TokenService } from './services/token/token.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ShopComponent } from './front/shop/shop.component';
import { CartComponent } from './front/cart/cart.component';
import { ProductComponent } from './front/product/product.component';
import { FrontComponent } from './front/front.component';
import { RoleGuard } from './guards/role/role.guard';
import { PagesService } from './services/pages/pages.service';
import { ProductCardComponent } from './front/product-card/product-card.component';
import { MaterialModule } from './material/material.module';

const tokenGetter = TokenService.getAuthToken;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    FrontComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    })
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    TokenService,
    PagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
