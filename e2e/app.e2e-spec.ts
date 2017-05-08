import { WotStatsPage } from './app.po';

describe('wot-stats App', () => {
  let page: WotStatsPage;

  beforeEach(() => {
    page = new WotStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
