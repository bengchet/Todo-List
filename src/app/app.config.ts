import { ApplicationConfig } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from '../environment/environment';
import { Capacitor } from '@capacitor/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideServiceWorker('ngsw-worker.js', {
      enabled: environment.production && !Capacitor.isNativePlatform,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
