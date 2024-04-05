import ScreenChooser from '../screen-chooser';
import Screen from '../screen';

describe('ScreenChooser', () => {
  it('should throw an error when no screens are found', () => {
    expect(() => new ScreenChooser([])).toThrow('No screens found');
  });

  it('should select screen by id', () => {
    const screens = [new Screen('screen1'), new Screen('screen2')];
    const screen = new ScreenChooser(screens).selectScreen(screens[0].id);
    expect(screen.id).toEqual('screen1');
  });
});
