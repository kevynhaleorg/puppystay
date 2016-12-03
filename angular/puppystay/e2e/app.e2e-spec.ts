import { PuppystayPage } from './app.po';

describe('puppystay App', function() {
  let page: PuppystayPage;

  beforeEach(() => {
    page = new PuppystayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
