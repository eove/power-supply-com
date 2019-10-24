import { DriverAnswer } from './types';

export default (result: DriverAnswer) =>
  Object.assign({}, result, {
    raw: Number(result.raw)
  });
