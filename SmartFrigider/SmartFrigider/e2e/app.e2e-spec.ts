import { SmartFrigiderPage } from './app.po';

describe('smart-frigider App', () => {
  let page: SmartFrigiderPage;

  beforeEach(() => {
    page = new SmartFrigiderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
