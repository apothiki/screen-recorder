import registerBridgeHandlers from '@lib/bridge/register-bridge-handlers';

class App {
  public start(): void {
    registerBridgeHandlers();
  }

  public close(): void {}
}

export default App;
