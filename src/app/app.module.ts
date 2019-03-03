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
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { CityDropDownComponent } from './shared/widgets/city-drop-down/city-drop-down.component';
import { StorageService } from './shared/services/storage.service';
import { CityComponent } from './city/city.component';

import { ChartModule } from 'angular-highcharts';
import { CityResolverGuard } from './city/city-resolver.guard';

export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateLoader(http, '/i18n/', '.json');
}

const MODULES = [
  SharedModule,
  ChartModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
]

const SERVICES = [
  AppService,
  CityService,
  StorageService,
  CityResolverGuard
]

const ENTRY_COMPONENTS = [
  CityDropDownComponent
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent
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
  entryComponents: [...ENTRY_COMPONENTS],
  bootstrap: [AppComponent]
})
export class AppModule { }
