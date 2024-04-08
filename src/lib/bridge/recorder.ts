import ScreenRecorder from '@lib/recorder/screen-recorder';

const startRecording = async (): Promise<void> => {
  const screenRecorder = ScreenRecorder.instance();
  try {
    await screenRecorder.startRecording();
  } catch (error) {
    console.error(error);
  }
};

const stopRecording = async (): Promise<void> => {
  const screenRecorder = ScreenRecorder.instance();
  try {
    await screenRecorder.stopRecording();
  } catch (error) {
    console.error(error);
  }
};

export default { startRecording, stopRecording };
