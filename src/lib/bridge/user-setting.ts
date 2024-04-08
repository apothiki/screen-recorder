import UserSetting from '@lib/user-setting/user-setting';
import UserSettingManager from '@lib/user-setting/user-setting-manager';

const loadUserSetting = async (): Promise<UserSetting> => {
  const userSettingManager = await UserSettingManager.instance();
  return userSettingManager.userSetting;
};

const saveUserSetting = async (userSetting: UserSetting): Promise<void> => {
  const userSettingManager = await UserSettingManager.instance();
  userSettingManager.userSetting = userSetting;
  await userSettingManager.save();
};

const updateUserSetting = async (
  userSetting: UserSetting,
): Promise<UserSetting> => {
  const userSettingManager = await UserSettingManager.instance();
  const updatedSetting = { ...userSettingManager.userSetting, ...userSetting };
  return updatedSetting;
};

export default { loadUserSetting, saveUserSetting, updateUserSetting };
