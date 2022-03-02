import buildSetVoltageCommand from './buildSetVoltageCommand';

describe('it6932a driver - build "Set Voltage" Command', () => {
  it('should build a set voltage command', () => {
    expect(buildSetVoltageCommand(23.2)).toEqual({
      raw: 'VOLT 23.2\n',
      isAnswerExpected: false,
      answerTimeoutMS: 3000,
    });
  });

  it('should fire an error when voltage is too high', () => {
    expect(() => {
      buildSetVoltageCommand(99);
    }).toThrow(/max voltage is: 60V/);
  });

  it('should fire an error when voltage is too low', () => {
    expect(() => {
      buildSetVoltageCommand(-2);
    }).toThrow(/min voltage is: 0V/);
  });
});
