import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { App } from './app/app';

bootstrap(App, [
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);