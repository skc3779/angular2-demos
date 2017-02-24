import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
    }));

    it('should instantiate the AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'My Angular2 + TypeScript App'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('My Angular2 + TypeScript App');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('My Angular2 + TypeScript App');
    }));
});
