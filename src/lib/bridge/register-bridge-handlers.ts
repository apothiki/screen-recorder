import { ipcMain } from 'electron';

import { BridgeAction } from './constant';
import Recorder from './recorder';
import Screen from './screen';
import UserSetting from './user-setting';

const registerBridgeHandlers = () => {
  const actionToHandlerMap = {
    [BridgeAction.startRecording]: Recorder.startRecording,
    [BridgeAction.stopRecording]: Recorder.stopRecording,
    [BridgeAction.listScreens]: Screen.listScreens,
    [BridgeAction.selectScreen]: Screen.selectScreen,
    [BridgeAction.loadUserSetting]: UserSetting.loadUserSetting,
    [BridgeAction.saveUserSetting]: UserSetting.saveUserSetting,
    [BridgeAction.updateUserSetting]: UserSetting.updateUserSetting,
  };

  Object.entries(actionToHandlerMap).forEach(([action, handler]) => {
    ipcMain.handle(action, (event, ...args: any[]): void => {
      // ts(2556)
      // @ts-ignore-next-line
      handler(...args);
    });
  });
};

export default registerBridgeHandlers;
