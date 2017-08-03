import { AcmeincPage } from './app.po';

describe('acmeinc App', () => {
  let page: AcmeincPage;

  beforeEach(() => {
    page = new AcmeincPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
