import buildMeasureCurrentCommand from './buildMeasureCurrentCommand';

describe('it6932a driver - build "Measure Current" Command', () => {
  it('should build a Measure voltage command', () => {
    expect(buildMeasureCurrentCommand()).toEqual({
      raw: 'MEAS:CURR?\n',
      isAnswerExpected: true,
      answerTimeoutMS: 3000,
    });
  });
});
