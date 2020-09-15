import { ConsoleLogger, LoggerMessageType } from '../../src';

describe('The Console Logger', () => {
  it('should write an Error to the console when called', () => {
    global.console.log = jest.fn();

    ConsoleLogger.write(LoggerMessageType.Error, 'Test message');
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith('Error: Test message');
  });

  it('should write an Error with a payload to the console when called', () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };
    const serializedPayload = '{\n'
      + '    "name": "value"\n'
      + '}';

    ConsoleLogger.write(LoggerMessageType.Error, 'Test message', payload);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, 'Error: Test message');
    expect(global.console.log).toHaveBeenNthCalledWith(2, serializedPayload);
  });

  it('should write an Warning to the console when called', () => {
    global.console.log = jest.fn();

    ConsoleLogger.write(LoggerMessageType.Warning, 'Test message');
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith('Warning: Test message');
  });

  it('should write an Warning with a payload to the console when called', () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };
    const serializedPayload = '{\n'
      + '    "name": "value"\n'
      + '}';

    ConsoleLogger.write(LoggerMessageType.Warning, 'Test message', payload);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, 'Warning: Test message');
    expect(global.console.log).toHaveBeenNthCalledWith(2, serializedPayload);
  });

  it('should write an Info to the console when called', () => {
    global.console.log = jest.fn();

    ConsoleLogger.write(LoggerMessageType.Info, 'Test message');
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith('Info: Test message');
  });

  it('should write an Info with a payload to the console when called', () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };
    const serializedPayload = '{\n'
      + '    "name": "value"\n'
      + '}';

    ConsoleLogger.write(LoggerMessageType.Info, 'Test message', payload);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, 'Info: Test message');
    expect(global.console.log).toHaveBeenNthCalledWith(2, serializedPayload);
  });

  it('should write an Debug to the console when called', () => {
    global.console.log = jest.fn();

    ConsoleLogger.write(LoggerMessageType.Debug, 'Test message');
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith('Debug: Test message');
  });

  it('should write an Error with a payload to the console when called', () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };
    const serializedPayload = '{\n'
      + '    "name": "value"\n'
      + '}';

    ConsoleLogger.write(LoggerMessageType.Debug, 'Test message', payload);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenNthCalledWith(1, 'Debug: Test message');
    expect(global.console.log).toHaveBeenNthCalledWith(2, serializedPayload);
  });
});
