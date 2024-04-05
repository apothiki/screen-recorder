import ScreenFinder from '../screen-finder';

describe('ScreenFinder', () => {
  it('listScreens should return an empty array when no screens are found', async () => {
    const screenFinder = await ScreenFinder.instance();
    expect(screenFinder.listScreens()).toEqual([]);
  });
});
