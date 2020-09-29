import buildQueryIdentificationCommand from './buildQueryIdentificationCommand';

describe('it6932a driver - build "Query Identification" Command', () => {
  it('should build a query identification command', () => {
    expect(buildQueryIdentificationCommand()).toEqual({
      raw: '*IDN?\n',
      isAnswerExpected: true,
      answerTimeoutMS: 3000
    });
  });
});
