import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `OUTP ON\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false
  };
};
