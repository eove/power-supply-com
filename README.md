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

const communicator = createCommunicator('/dev/ttyUSB0');

communicator.open().then(() => {
  return communicator
    .sendCommand({ type: 'QUERY_IDENTIFICATION' })
    .then(console.log);
});
```

## How to contribute?

You would like a power supply device to be supported?

Here are the steps:

1. Find the corresponding PDF documentation and eventually add it to `./docs`
2. Create a `./lib/devices/<your-model>` directory and implement the methods of the [Driver Interface](https://github.com/eove/power-supply-com/blob/master/lib/domain/types.ts)
3. Send a PR for review and have fun testing!
