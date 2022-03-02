import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `OUTP OFF\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false,
  };
};
