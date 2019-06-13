import { DriverCommand } from '../../domain';
import { MAX_VOLTAGE, MIN_VOLTAGE } from './characteristics';

export default (voltage: number): DriverCommand => {
  if (voltage > MAX_VOLTAGE) {
    throw new Error(`max voltage is: ${MAX_VOLTAGE}v`);
  }

  if (voltage < MIN_VOLTAGE) {
    throw new Error(`min voltage is: ${MIN_VOLTAGE}v`);
  }

  return {
    raw: `VOLT ${voltage}\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false
  };
};
