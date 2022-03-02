import buildEnableOutputCommand from './buildEnableOutputCommand';

describe('it6932a driver - build "Enable output" Command', () => {
  it('should build an Enable output command', () => {
    expect(buildEnableOutputCommand()).toEqual({
      raw: 'OUTP ON\n',
      isAnswerExpected: false,
      answerTimeoutMS: 3000,
    });
  });
});
