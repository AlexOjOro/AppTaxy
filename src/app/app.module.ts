import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/modules/shared.module';
import { MainModule } from './main/main.module';
import { AppSplashScreenService } from './core/services/splash-screen.service';
import { AppConfigService } from './core/services/config.service';
import { NavigationService } from './core/components/navigation/navigation.service';
import { TranslateModule } from '@ngx-translate/core';
import { Error404Component } from './main/errorsPages/404/error-404.component';
import { MsAdalAngular6Module, MsAdalAngular6Service, AuthenticationGuard } from 'microsoft-adal-angular6';
import { InterceptorService } from './core/services/rest-call/interceptor.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { CustomPrimengModule } from '@jabil/ui-ng';
import { TranslateApplicationService } from './core/translate/translate-application-service';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }),
    TranslateModule.forRoot(),
    TranslateModule.forRoot(),
    MainModule,
    MsAdalAngular6Module.forRoot({}),
    CustomPrimengModule
  ],
  providers: [
    AppSplashScreenService,
    AppConfigService,
    NavigationService,
    AuthenticationGuard,
    ToastrService,
    DatePipe,
    MsAdalAngular6Service,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    },
    TranslateApplicationService
  ],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
