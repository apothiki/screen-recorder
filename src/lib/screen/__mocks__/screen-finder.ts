const ScreenFinder = {
  instance: async () => ({
    listScreens: jest.fn().mockReturnValue([{ id: 'screen1' }]),
    setScreens: jest.fn(),
    findScreens: jest.fn(),
  }),
};

export default ScreenFinder;
