import Screen from '@lib/screen/screen';
import ScreenManager from '@lib/screen/screen-manager';

const listScreens = async (): Promise<Screen[]> => {
  const screenManager = await ScreenManager.instance();
  return screenManager.listScreens();
};

const selectScreen = async (id: string): Promise<Screen> => {
  const screenManager = await ScreenManager.instance();
  return screenManager.selectScreen(id);
};

export default { listScreens, selectScreen };
