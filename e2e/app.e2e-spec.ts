import { AngularItunesPage } from './app.po';

describe('angular-itunes App', () => {
  let page: AngularItunesPage;

  beforeEach(() => {
    page = new AngularItunesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
