import fs from 'fs';

import UserSettingManager from '../user-setting-manager';

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn().mockResolvedValue('{ "dst": "path/to/recordings" }'),
    writeFile: jest.fn(),
  },
}));

jest.mock('electron', () => ({
  app: {
    getPath: jest.fn().mockReturnValue('path/to/user/data'),
  },
}));

jest.mock('path', () => ({
  join: jest.fn().mockImplementation((...args) => args.join('/')),
}));

describe('UserSettingManager', () => {
  it('should load user setting', async () => {
    const userSettingManager = await UserSettingManager.instance();
    await userSettingManager.load();
    expect(userSettingManager.userSetting).toEqual({
      dst: 'path/to/recordings',
    });
  });

  it('should save user setting', async () => {
    const userSettingManager = await UserSettingManager.instance();
    await userSettingManager.save();
    expect(fs.promises.writeFile).toHaveBeenCalledWith(
      'path/to/user/data/user-setting.json',
      '{"dst":"path/to/recordings"}',
      { encoding: 'utf8' },
    );
  });
});
