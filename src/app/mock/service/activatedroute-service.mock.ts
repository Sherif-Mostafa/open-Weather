import { of } from 'rxjs/internal/observable/of';

export class ActivatedRouteServiceMock {

    public params = of({ id: 1 });

}