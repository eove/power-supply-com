# Communicator creation

```typescript
function createCommunicator(
  portName: string,
  options?: CommunicatiorOptions
): Communicator;

// with:

interface CommunicatiorOptions {
  deviceType?: string;
  debugEnabled?: boolean;
  transportDebugEnabled?: boolean;
}
```

# Communicator API

## open

```javascript
open(): Promise<void>
```

## close

```javascript
close(): Promise<void>
```

## listPorts

```javascript
listPorts(): Promise<Device[]>
```

## sendCommand

```javascript
sendCommand({type: string, payload?: any}): Promise<{}>
```

Sends a command to the device and returns a Promise resolving the answer.

Example:

```javascript
const { createCommunicator } = require('@eove/power-supply-com');

const communicator = createCommunicator('/dev/ttyUSB1');

communicator
  .open()
  .then(() => communicator.sendCommand({ type: 'QUERY_IDENTIFICATION' }))
  .then(result => console.log(result));
```

Available commands:

```javascript
{
  type: 'QUERY_IDENTIFICATION'
},
```

```javascript
{
  type: 'ENABLE_OUTPUT',
},
```

```javascript
{
  type: 'DISABLE_OUTPUT',
},
```

```javascript
{
  type: 'GET_CURRENT';
}
```

```javascript
{
  type: 'SET_CURRENT',
  payload: {
    current: 5.12
  }
}
```

```javascript
{
  type: 'GET_VOLTAGE';
}
```

```javascript
{
  type: 'SET_VOLTAGE',
  payload: {
    voltage: 22.5
  }
}
```

```javascript
{
  type: 'MEASURE_CURRENT';
}
```

```javascript
{
  type: 'MEASURE_VOLTAGE';
}
```

## command\$, answer\$, event\$, data\$

Expose [Observables](http://reactivex.io/documentation/observable.html) pushing respectively commands, answers, events and raw data.

Example:

```javascript
const { createCommunicator } = require('@eove/power-supply-com');

const communicator = createCommunicator('/dev/ttyUSB1');

communicator.answer$.subscribe(command => console.log(command)); // should display all the received answers

communicator
  .open()
  .then(() =>
    communicator.sendCommand({ type: 'MEASURE_CURRENT' })
  );
  .then(() =>
    communicator.sendCommand({ type: 'MEASURE_VOLTAGE' })
  );
```
