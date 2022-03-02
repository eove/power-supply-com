import buildGetVoltageCommand from './buildGetVoltageCommand';

describe('it6932a driver - build "Get Voltage" Command', () => {
  it('should build a Get voltage command', () => {
    expect(buildGetVoltageCommand()).toEqual({
      raw: 'VOLT?\n',
      isAnswerExpected: true,
      answerTimeoutMS: 3000,
    });
  });
});
