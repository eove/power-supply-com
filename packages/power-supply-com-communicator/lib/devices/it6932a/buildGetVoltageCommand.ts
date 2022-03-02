import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `VOLT?\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: true,
  };
};
