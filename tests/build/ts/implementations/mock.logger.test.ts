import { MockLogger, LoggerMessageType } from '../../../../lib';

afterEach(() => {
  jest.resetAllMocks();
});

describe('The Mock Logger', () => {
  it('should write an Error to the console when called', async () => {
    await MockLogger.write(LoggerMessageType.Error, 'Test message');
    expect(MockLogger.write).toHaveBeenCalledTimes(1);
    expect(MockLogger.write).toHaveBeenCalledWith(LoggerMessageType.Error, 'Test message');
  });

  it('should write an Error with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };

    await MockLogger.write(LoggerMessageType.Error, 'Test message', payload);
    expect(MockLogger.write).toHaveBeenCalledTimes(1);
    expect(MockLogger.write).toHaveBeenCalledWith(LoggerMessageType.Error, 'Test message', payload);
  });
});
