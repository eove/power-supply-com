import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `MEAS:CURR?\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: true,
  };
};
