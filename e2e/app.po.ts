import { browser, element, by } from 'protractor';

export class RecipeBookFinalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rbf-root h1')).getText();
  }
}
