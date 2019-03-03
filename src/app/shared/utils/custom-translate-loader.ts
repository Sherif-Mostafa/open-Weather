import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export class CustomTranslateLoader extends TranslateHttpLoader {
    private customHttp;
    constructor(http: HttpClient, prefix?: string, suffix?: string) {
        super(http, prefix, suffix);
        this.customHttp = http;
    }

    getTranslation(lang?: string) {
            return this.customHttp.get(this.prefix + lang + this.suffix);
    }
}
