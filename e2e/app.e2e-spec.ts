import { SwifthireFrontentPage } from './app.po';

describe('swifthire-frontent App', () => {
  let page: SwifthireFrontentPage;

  beforeEach(() => {
    page = new SwifthireFrontentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
