import { DriverCommand } from '../../domain';
import { MAX_CURRENT, MIN_CURRENT } from './characteristics';

export default (current: number): DriverCommand => {
  if (current > MAX_CURRENT) {
    throw new Error(`max current is: ${MAX_CURRENT}A`);
  }

  if (current < MIN_CURRENT) {
    throw new Error(`min current is: ${MIN_CURRENT}A`);
  }

  return {
    raw: `CURR ${current}\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false
  };
};
