const { LoggerMessageType, MessageType } = require('../../../lib');

describe('The Console Logger MessageType method', () => {
  it('should return the expected results when called', () => {
    expect(MessageType(LoggerMessageType.Error)).toBe('Error');
    expect(MessageType(LoggerMessageType.Warning)).toBe('Warning');
    expect(MessageType(LoggerMessageType.Info)).toBe('Info');
    expect(MessageType(LoggerMessageType.Debug)).toBe('Debug');
  });
});
