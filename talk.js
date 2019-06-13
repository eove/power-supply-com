const SerialPort = require('serialport');
const ReadlineParser = require('@serialport/parser-readline');

const port = new SerialPort('/dev/tty.usbserial-FTHJLQ5I', {
  baudRate: 115200
});

port.on('data', data => console.log('rec:', data.toString()));

write('VOLT 22\n')
  .then(() => write('VOLT?\n'))
  .then(() => write('*IDN?\n'))
  .catch(error => console.log('error', error));

function write(data) {
  return new Promise((resolve, reject) => {
    const sent = Buffer.from(data);
    port.write(sent, error => {
      console.log('sent:', sent.toString());
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}
