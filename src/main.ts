import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import {registerLicense} from "@syncfusion/ej2-base"
import { environment } from './environments/environment';
registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcUBLQmFJfFBmRGJTfVZ6cVVWESFaRnZdQV1lSH1SdEFkWXdbd3ZR");
if(environment.production){
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
