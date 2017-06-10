import { FirebaseFotosPage } from './app.po';

describe('firebase-fotos App', () => {
  let page: FirebaseFotosPage;

  beforeEach(() => {
    page = new FirebaseFotosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
