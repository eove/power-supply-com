import buildDisableOutputCommand from './buildDisableOutputCommand';

describe('it6932a driver - build "Disable output" Command', () => {
  it('should build an Disable output command', () => {
    expect(buildDisableOutputCommand()).toEqual({
      raw: 'OUTP OFF\n',
      isAnswerExpected: false,
      answerTimeoutMS: 3000,
    });
  });
});
