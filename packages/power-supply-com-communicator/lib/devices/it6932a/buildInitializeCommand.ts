import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `SYST:REM\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: false
  };
};
