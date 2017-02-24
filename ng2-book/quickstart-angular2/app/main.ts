import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

// platform의 bootscrapModul() 메서드에 app.module.ts에서 정의한
// appModules을 지정 함.
platform.bootstrapModule(AppModule);