import * as _ from 'lodash';
import { createIT6932ADriver } from './it6932a';

export * from '../domain/types';

const MAP_SUPPORTTED_DEVICES_TO_FACTORY: any = {
  it6932a: createIT6932ADriver,
};

export function createDriver(deviceType?: string) {
  const type = deviceType || 'it6932a';
  const factory = MAP_SUPPORTTED_DEVICES_TO_FACTORY[type];
  if (!factory) {
    throw new Error(
      `Unknown device type: ${deviceType}, supported ones: ${_.keys(
        MAP_SUPPORTTED_DEVICES_TO_FACTORY
      )}`
    );
  }
  return factory();
}
