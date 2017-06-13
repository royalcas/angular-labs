import { Lab0Page } from './app.po';

describe('lab0 App', () => {
  let page: Lab0Page;

  beforeEach(() => {
    page = new Lab0Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
