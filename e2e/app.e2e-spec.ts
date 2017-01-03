import { RecipeBookFinalPage } from './app.po';

describe('recipe-book-final App', function() {
  let page: RecipeBookFinalPage;

  beforeEach(() => {
    page = new RecipeBookFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rbf works!');
  });
});
