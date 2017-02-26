import { AngularCliNg2Page } from './app.po';

describe('angular-cli-ng2 App', () => {
  let page: AngularCliNg2Page;

  beforeEach(() => {
    page = new AngularCliNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
