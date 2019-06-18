import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `CURR?\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: true
  };
};
