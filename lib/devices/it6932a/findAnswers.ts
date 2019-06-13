import * as _ from 'lodash';
import { FindAnswersResult } from '../../domain';

export default (data: string): FindAnswersResult => {
  const raws = data.split('\n');

  if (isSeparatorReceivedForLastRaw()) {
    return {
      answers: raws.filter(r => r).map(r => ({ raw: r })),
      remaining: ''
    };
  }
  return {
    answers: _.dropRight(raws)
      .filter(r => r)
      .map(r => ({ raw: r })),
    remaining: _.last(raws) || ''
  };

  function isSeparatorReceivedForLastRaw() {
    return _.last(raws) === '';
  }
};
