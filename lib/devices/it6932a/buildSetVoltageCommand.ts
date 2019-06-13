import { DriverCommand } from '../../domain';

export default (voltage: number): DriverCommand => {
  return {
    raw: `VOLT ${voltage}\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false
  };
};
