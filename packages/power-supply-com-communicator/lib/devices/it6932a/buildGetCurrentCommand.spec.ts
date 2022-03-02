import buildGetCurrentCommand from './buildGetCurrentCommand';

describe('it6932a driver - build "Get Current" Command', () => {
  it('should build a Get voltage command', () => {
    expect(buildGetCurrentCommand()).toEqual({
      raw: 'CURR?\n',
      isAnswerExpected: true,
      answerTimeoutMS: 3000,
    });
  });
});
