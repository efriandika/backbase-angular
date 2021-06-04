import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http/interceptors/auth.interceptor';

/** Http interceptor providers */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

/**
 * Handle core functionality for entire application
 * Only root module is allowed to import this module
 *
 * @author efriandika
 */
@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  providers: [
    httpInterceptorProviders
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent
  ]
})
export class CoreModule {
}
