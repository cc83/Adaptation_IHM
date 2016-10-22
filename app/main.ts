// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {SessionService}           from './session-service/session.service';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {MainComponent}           from './maincomponent/maincomponent';

platformBrowserDynamic().bootstrapModule(AppModule);

//platformBrowserDynamic().bootstrapModule(AppModule, [SessionService]);
