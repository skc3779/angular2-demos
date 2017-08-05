import {TestBed} from '@angular/core/testing';

import {NotFoundComponent} from './not-found.component';

describe('AboutComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [NotFoundComponent] }));

    it('should instantiate the NotFoundComponent', () => {
        const fixture = TestBed.createComponent(NotFoundComponent);
        expect(fixture.componentInstance instanceof NotFoundComponent).toBe(true, 'should create NotFoundComponent');
    });
});
