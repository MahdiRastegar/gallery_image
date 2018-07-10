//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
