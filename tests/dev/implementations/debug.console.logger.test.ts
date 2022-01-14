import { DebugConsoleLogger, LoggerMessageType } from '../../../src';

const messageDate = new Date();

describe('The Console Logger', () => {
  it('should Write an Error message to the console when called', async () => {
    global.console.log = jest.fn();

    await DebugConsoleLogger.Write(LoggerMessageType.Error, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} ERROR   Test message`);
  });

  it('should Write an Error message to the console when called without a date', async () => {
    global.console.log = jest.fn();

    await DebugConsoleLogger.Write(LoggerMessageType.Error, 'Test message');
    expect(global.console.log).toHaveBeenCalledTimes(1);
  });

  it('should Write an Error message with an object payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await DebugConsoleLogger.Write(LoggerMessageType.Error, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} ERROR   Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write an Error message with an error payload to the console when called', async () => {
    global.console.log = jest.fn();

    const error = new Error('Test Error Message');
    const serializedPayload = '{"name":"Error","message":"Test Error Message"}';

    await DebugConsoleLogger.Write(LoggerMessageType.Error, 'Test message', error, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} ERROR   Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write a Warning message to the console when called', async () => {
    global.console.log = jest.fn();

    await DebugConsoleLogger.Write(LoggerMessageType.Warning, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} WARNING Test message`);
  });

  it('should Write a Warning message with an object payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await DebugConsoleLogger.Write(LoggerMessageType.Warning, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} WARNING Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write a Warning message with an error object payload to the console when called', async () => {
    global.console.log = jest.fn();

    const error = new Error('Test Error Message');
    const serializedPayload = '{"name":"Error","message":"Test Error Message"}';

    await DebugConsoleLogger.Write(LoggerMessageType.Warning, 'Test message', error, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} WARNING Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write an Info message to the console when called', async () => {
    global.console.log = jest.fn();

    await DebugConsoleLogger.Write(LoggerMessageType.Info, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} INFO    Test message`);
  });

  it('should Write an Info message with an object payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await DebugConsoleLogger.Write(LoggerMessageType.Info, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} INFO    Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write an Info message with an error payload to the console when called', async () => {
    global.console.log = jest.fn();

    const error = new Error('Test Error Message');
    const serializedPayload = '{"name":"Error","message":"Test Error Message"}';

    await DebugConsoleLogger.Write(LoggerMessageType.Info, 'Test message', error, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} INFO    Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write a Debug message to the console when called', async () => {
    global.console.log = jest.fn();

    await DebugConsoleLogger.Write(LoggerMessageType.Debug, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} DEBUG   Test message`);
  });

  it('should Write a Debug message with an object payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await DebugConsoleLogger.Write(LoggerMessageType.Debug, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} DEBUG   Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });

  it('should Write a Debug message with an error payload to the console when called', async () => {
    global.console.log = jest.fn();

    const error = new Error('Test Error Message');
    const serializedPayload = '{"name":"Error","message":"Test Error Message"}';

    await DebugConsoleLogger.Write(LoggerMessageType.Debug, 'Test message', error, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} DEBUG   Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD ${serializedPayload}`);
  });
});
