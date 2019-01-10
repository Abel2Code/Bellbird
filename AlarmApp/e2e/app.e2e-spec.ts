import { AlarmAppPage } from './app.po';

describe('alarm-app App', () => {
  let page: AlarmAppPage;

  beforeEach(() => {
    page = new AlarmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
