import { Ng2D3CirclePackingPage } from './app.po';

describe('ng2-d3-circle-packing App', () => {
  let page: Ng2D3CirclePackingPage;

  beforeEach(() => {
    page = new Ng2D3CirclePackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
