const ScreenChooser = jest.fn().mockImplementation(screens => ({
  selectScreen: jest.fn().mockReturnValue(screens[0]),
}));

export default ScreenChooser;
