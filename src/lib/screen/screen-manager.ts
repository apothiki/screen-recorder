import ScreenFinder from './screen-finder';
import Screen from './screen';
import ScreenChooser from './screen-chooser';

class ScreenManager {
  static _instance: ScreenManager;

  private screens: Screen[];

  static async instance(): Promise<ScreenManager> {
    if (ScreenManager._instance) {
      return ScreenManager._instance;
    }
    const screens = (await ScreenFinder.instance()).listScreens();
    ScreenManager._instance = new ScreenManager(screens);
    return ScreenManager._instance;
  }

  public async listScreens(): Promise<Screen[]> {
    return this.screens;
  }

  public selectScreen(id: string): Screen {
    const screen = new ScreenChooser(this.screens).selectScreen(id);
    return screen;
  }

  private constructor(screens: Screen[]) {
    this.screens = screens;
  }
}

export default ScreenManager;
