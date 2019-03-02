import { TranslateService } from '@ngx-translate/core';

export function appInitializer(translateService: TranslateService) {
    return () => {
        translateService.setDefaultLang('en');
        translateService.use('en');
    }
}