import Screen from './screen';

class ScreenFinder {
  private screens: Screen[];

  static async instance(): Promise<ScreenFinder> {
    const screenFinder = new ScreenFinder();
    const screens = await screenFinder.findScreens();
    screenFinder.setScreens(screens);
    return screenFinder;
  }

  public listScreens(): Screen[] {
    return this.screens;
  }

  // eslint-disable-next-line no-useless-constructor
  private constructor() {}

  private async findScreens(): Promise<Screen[]> {
    // TODO: Implement the findScreens method
    return new Promise<Screen[]>(resolve => {
      const screens = [];
      resolve(screens);
    });
  }

  private setScreens(screens: Screen[]): void {
    this.screens = screens;
  }
}

export default ScreenFinder;
