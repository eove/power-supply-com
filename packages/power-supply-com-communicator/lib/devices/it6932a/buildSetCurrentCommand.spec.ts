import buildSetCurrentCommand from './buildSetCurrentCommand';

describe('it6932a driver - build "Set Current" Command', () => {
  it('should build a set Current command', () => {
    expect(buildSetCurrentCommand(3.2)).toEqual({
      raw: 'CURR 3.2\n',
      isAnswerExpected: false,
      answerTimeoutMS: 3000,
    });
  });

  it('should fire an error when current is too high', () => {
    expect(() => {
      buildSetCurrentCommand(99);
    }).toThrow(/max current is: 10A/);
  });

  it('should fire an error when current is too low', () => {
    expect(() => {
      buildSetCurrentCommand(-2);
    }).toThrow(/min current is: 0A/);
  });
});
