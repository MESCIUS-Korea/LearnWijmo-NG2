import { PureJSTutorialPage } from './app.po';

describe('pure-js-tutorial App', function() {
  let page: PureJSTutorialPage;

  beforeEach(() => {
    page = new PureJSTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
