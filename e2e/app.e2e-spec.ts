import { BotigaAppPage } from './app.po';

describe('botiga-app App', () => {
  let page: BotigaAppPage;

  beforeEach(() => {
    page = new BotigaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
