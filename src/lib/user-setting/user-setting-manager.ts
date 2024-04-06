import fs from 'fs';
import path from 'path';
import { app } from 'electron';

import UserSetting from './user-setting';

class UserSettingManager {
  private static _instance: UserSettingManager;
  private _userSettingPath: string;
  private _userSetting: UserSetting;

  public static async instance(): Promise<UserSettingManager> {
    if (UserSettingManager._instance) {
      return UserSettingManager._instance;
    }
    const userSettingManager = new UserSettingManager();
    UserSettingManager._instance = userSettingManager;
    await userSettingManager.load();
    return UserSettingManager._instance;
  }

  private constructor() {
    this._userSettingPath = path.join(
      app.getPath('userData'),
      'user-setting.json',
    );
  }

  public get userSetting(): UserSetting {
    return this._userSetting;
  }

  public set userSetting(userSetting: UserSetting) {
    this._userSetting = userSetting;
  }

  public async load(): Promise<void> {
    try {
      const data = await fs.promises.readFile(this._userSettingPath, {
        encoding: 'utf8',
      });
      this._userSetting = JSON.parse(data);
    } catch (error) {
      console.error('Failed to load user setting', error);
    }
  }

  public async save(): Promise<void> {
    try {
      await fs.promises.writeFile(
        this._userSettingPath,
        JSON.stringify(this._userSetting),
        { encoding: 'utf8' },
      );
    } catch (error) {
      console.error('Failed to save user setting', error);
    }
  }
}

export default UserSettingManager;
