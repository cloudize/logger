import { LoggerMessageType } from '../../../../lib';

describe('The Console ILogger MessageType method', () => {
  it('should return the expected results when called', () => {
    expect(LoggerMessageType.Error).toBe('Error');
    expect(LoggerMessageType.Warning).toBe('Warning');
    expect(LoggerMessageType.Info).toBe('Info');
    expect(LoggerMessageType.Debug).toBe('Debug');
  });
});
