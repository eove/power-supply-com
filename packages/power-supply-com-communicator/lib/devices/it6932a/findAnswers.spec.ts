import findAnswers from './findAnswers';

describe('it6932a driver - find answers', () => {
  it('should find multiple answers', () => {
    expect(findAnswers('123\n456\n')).toEqual({
      answers: [{ raw: '123' }, { raw: '456' }],
      remaining: '',
    });
  });

  it('should return remaining bytes', () => {
    expect(findAnswers('123\n456')).toEqual({
      answers: [{ raw: '123' }],
      remaining: '456',
    });
  });
});
