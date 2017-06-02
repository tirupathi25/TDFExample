import { TDFormsValidationPage } from './app.po';

describe('tdforms-validation App', () => {
  let page: TDFormsValidationPage;

  beforeEach(() => {
    page = new TDFormsValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
