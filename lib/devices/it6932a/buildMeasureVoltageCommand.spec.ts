import buildMeasureVoltageCommand from './buildMeasureVoltageCommand';

describe('it6932a driver - build "Measure Voltage" Command', () => {
  it('should build a Measure voltage command', () => {
    expect(buildMeasureVoltageCommand()).toEqual({
      raw: 'MEAS:VOLT?\n',
      isAnswerExpected: true,
      answerTimeoutMS: 3000
    });
  });
});
