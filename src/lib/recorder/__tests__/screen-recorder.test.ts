import ScreenRecorder from '../screen-recorder';

describe('ScreenRecorder', () => {
  it('should start recording', async () => {
    const screenRecorder = ScreenRecorder.instance();
    await screenRecorder.startRecording();
    expect(screenRecorder.recorderStatus).toEqual('RECORDING');
  });

  it('should stop recording', async () => {
    const screenRecorder = ScreenRecorder.instance();
    await screenRecorder.stopRecording();
    expect(screenRecorder.recorderStatus).toEqual('IDLE');
  });
});
