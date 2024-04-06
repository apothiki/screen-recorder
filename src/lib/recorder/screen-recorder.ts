import { RecorderStatus } from './constant';

class ScreenRecorder {
  public static _instance: ScreenRecorder;

  private status: RecorderStatus;

  public static instance(): ScreenRecorder {
    if (ScreenRecorder._instance) {
      return ScreenRecorder._instance;
    }
    ScreenRecorder._instance = new ScreenRecorder();
    return ScreenRecorder._instance;
  }

  public async startRecording(): Promise<void> {
    // TODO: Implement startRecording
    return new Promise<void>(resolve => {
      this.recorderStatus = RecorderStatus.RECORDING;
      resolve();
    });
  }

  public async stopRecording(): Promise<void> {
    // TODO: Implement stopRecording
    return new Promise<void>(resolve => {
      this.recorderStatus = RecorderStatus.IDLE;
      resolve();
    });
  }

  public get recorderStatus(): RecorderStatus {
    return this.status;
  }

  private set recorderStatus(status: RecorderStatus) {
    this.status = status;
  }

  private constructor() {
    this.status = RecorderStatus.IDLE;
  }
}

export default ScreenRecorder;
