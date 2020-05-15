import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { IconService } from './core/services/icon-service/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, public iconService: IconService) {
    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    // register icons
    this.iconService.registerIcons();
  }
}
