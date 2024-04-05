import Screen from './screen';

class ScreenChooser {
  private screens: Screen[];

  public constructor(screens: Screen[]) {
    if (screens.length === 0) {
      throw new Error('No screens found');
    }
    this.screens = screens;
  }

  public selectScreen(id: string): Screen {
    return this.screens.find(screen => screen.id === id);
  }
}

export default ScreenChooser;
