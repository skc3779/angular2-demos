import {TestBed, async} from '@angular/core/testing';

import {HelloComponent} from './hello.component';

describe('HelloComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HelloComponent ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(HelloComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as Service Welcome 'Hello 서비스!' `, async(() => {
        const fixture = TestBed.createComponent(HelloComponent);
        const app = fixture.componentInstance;
        expect(app.welcome).toEqual('Hello 서비스!');
    }));
});
