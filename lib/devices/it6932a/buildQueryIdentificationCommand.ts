import { DriverCommand } from '../../domain';

export default (): DriverCommand => {
  return {
    raw: `$IDN?\n`,
    answerTimeoutMS: 3000,
    isAnswerExpected: true
  };
};
