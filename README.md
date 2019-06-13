# power-supply-com [![Build Status](https://travis-ci.org/eove/power-supply-com.svg?branch=master)](https://travis-ci.org/eove/power-supply-com) [![npm version](https://badge.fury.io/js/%40eove%2Fpower-supply-com.svg)](https://badge.fury.io/js/%40eove%2Fpower-supply-com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Node.js lib to communicate with power supply devices such as ITECH `IT6932A` model through serial port.

## Supported devices

- IT6932A

## Install

`npm install`

## Usage

This lib exposes a communicator which may send commands to the power supply device and get answers.

```js
import { createCommunicator } from '@eove/flow-analyzer-com';

const communicator = createCommunicator();

communicator.open('/dev/ttyUSB0').then(() => {
  return communicator
    .sendCommand({ type: 'QUERY_IDENTIFICATION' })
    .then(console.log);
});
```
