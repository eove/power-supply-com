import { DriverCommand } from '../../domain';
import { MAX_VOLTAGE, MIN_VOLTAGE } from './properties';

export default (voltage: number): DriverCommand => {
  if (voltage > MAX_VOLTAGE) {
    throw new Error(`max voltage is: ${MAX_VOLTAGE}V`);
  }

  if (voltage < MIN_VOLTAGE) {
    throw new Error(`min voltage is: ${MIN_VOLTAGE}V`);
  }

  return {
    raw: `VOLT ${voltage}\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false,
  };
};
