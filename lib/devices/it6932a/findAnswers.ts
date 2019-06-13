import { FindAnswersResult } from '../../domain';

export default (data: string[]): FindAnswersResult => {
  return {
    answers: [{ raw: `${data}` }],
    remaining: []
  };
};
