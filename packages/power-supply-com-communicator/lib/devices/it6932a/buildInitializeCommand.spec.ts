import buildInitializeCommand from './buildInitializeCommand';

describe('it6932a driver - build "Initialize" Command', () => {
  it('should build an initilize command', () => {
    expect(buildInitializeCommand()).toEqual({
      raw: 'SYST:REM\n',
      isAnswerExpected: false,
      answerTimeoutMS: 3000
    });
  });
});
