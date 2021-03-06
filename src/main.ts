import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDER } from './app/app.routes';

import { UserDetailGuard } from './app/user';
import { UserEditGuard } from './app/user';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES_PROVIDER, UserDetailGuard, UserEditGuard]);
