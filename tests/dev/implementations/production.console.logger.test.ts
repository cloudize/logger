/* eslint-disable max-len */
import { ProductionConsoleLogger, LoggerMessageType } from '../../../src';

const messageDate = new Date();

describe('The Console Logger', () => {
  it('should Write an Error to the console when called', async () => {
    global.console.log = jest.fn();

    await ProductionConsoleLogger.Write(LoggerMessageType.Error, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} ERROR   Test message`);
  });

  it('should Write an Error with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await ProductionConsoleLogger.Write(LoggerMessageType.Error, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} ERROR   Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD [${serializedPayload.length} bytes]`);
  });

  it('should Write an Warning to the console when called', async () => {
    global.console.log = jest.fn();

    await ProductionConsoleLogger.Write(LoggerMessageType.Warning, 'Test message', undefined, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(`${messageDate.toISOString()} WARNING Test message`);
  });

  it('should Write an Warning with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };
    const serializedPayload = '{"name":"value","number":123}';

    await ProductionConsoleLogger.Write(LoggerMessageType.Warning, 'Test message', payload, messageDate);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, `${messageDate.toISOString()} WARNING Test message`);
    expect(global.console.log).toHaveBeenNthCalledWith(2, `${messageDate.toISOString()} PAYLOAD [${serializedPayload.length} bytes]`);
  });

  it('should Write an Info to the console when called', async () => {
    global.console.log = jest.fn();

    await ProductionConsoleLogger.Write(LoggerMessageType.Info, 'Test message', undefined, messageDate);
    expect(global.console.log).not.toHaveBeenCalled();
  });

  it('should Write an Info with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };

    await ProductionConsoleLogger.Write(LoggerMessageType.Info, 'Test message', payload, messageDate);
    expect(global.console.log).not.toHaveBeenCalled();
  });

  it('should Write an Debug to the console when called', async () => {
    global.console.log = jest.fn();

    await ProductionConsoleLogger.Write(LoggerMessageType.Debug, 'Test message', undefined, messageDate);
    expect(global.console.log).not.toHaveBeenCalled();
  });

  it('should Write an Error with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value', number: 123 };

    await ProductionConsoleLogger.Write(LoggerMessageType.Debug, 'Test message', payload, messageDate);
    expect(global.console.log).not.toHaveBeenCalled();
  });
});
