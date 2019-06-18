import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `MEAS:VOLT?\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: true
  };
};
