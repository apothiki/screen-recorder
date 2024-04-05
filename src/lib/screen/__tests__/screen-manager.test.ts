import ScreenManager from '../screen-manager';

jest.mock('../screen-chooser');
jest.mock('../screen-finder');

describe('ScreenManager', () => {
  it('should be singleton', async () => {
    const instance1 = await ScreenManager.instance();
    const instance2 = await ScreenManager.instance();
    expect(instance1).toBe(instance2);
  });

  it('should list screens', async () => {
    const screenManager = await ScreenManager.instance();
    const screens = await screenManager.listScreens();
    expect(screens).toStrictEqual([{ id: 'screen1' }]);
  });

  it('should select a screen', async () => {
    const screenManager = await ScreenManager.instance();
    const screen = screenManager.selectScreen('screen1');
    expect(screen.id).toEqual('screen1');
  });
});
