import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTranslateLoader } from './shared/utils/custom-translate-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { appInitializer } from './shared/utils/app-initializer';
import { SharedModule } from './shared/shared.module';
import { CityService } from './shared/services/city.service';


export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateLoader(http, '/i18n/', '.json');
}

const MODULES = [
  SharedModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
]

const SERVICES = [
  CityService
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ...MODULES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [TranslateService],
      multi: true
    },
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
