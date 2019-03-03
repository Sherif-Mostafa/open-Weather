import { Subject } from "rxjs/internal/Subject";

export class AppServiceMock {
    modalSubject: Subject<any> = new Subject<any>();
    hideModal: Subject<any> = new Subject<any>();
    showLoader: boolean = false;

}