# power-supply-com-talk

CLI to talk to power supply devices (it6932a, ...)

## Install

### Pre requisites

- [node](https://nodejs.org/en/download/package-manager/)

### MacOS

```
brew install zmq
git clone git@github.com:eove/power-supply-com.git
cd power-supply-com/packages/power-supply-com-talk
npm install -g node-gyp
npm install -g
```

### Linux, Raspberry

```
sudo apt-get install -y libglib2.0-dev libzmq3-dev
git clone git@github.com:eove/power-supply-com.git
cd power-supply-com/packages/power-supply-com-talk
npm install -g node-gyp
npm install -g
```

## Usage

**✋ Read this first!**

To know which USB ports are available on your machine: `powerSupplyTalk list-ports`. May return something like:

```bash
/dev/tty.Bluetooth-Incoming-Port
/dev/tty.usbserial-FTHJLQ5I
```

Then, just run for example: `powerSupplyTalk com -p /dev/tty.usbserial-FTHJLQ5I -d`

- To display debug messages, use the `-d` option
- You will need to pass a port name with the `-p` option.

## Shell

You can interact with the running `powerSupplyTalk com` process to make it send commands.

Start the interactive shell in another terminal with: `powerSupplyTalk shell` while `powerSupplyTalk com ...` is running.

    talk > help

Commands:

    help [command...]               Provides help for a given command.
    exit                            Exits application.
    run [command] [args]            Run the given [command], with optional JSON formatted [args] (see. examples)
    examples                        Show command examples

Tip: To be able to connect remotely, run: `powerSupplyTalk com -p /dev/tty.usbserial-FTHJLQ5I -l 0.0.0.0:9876`
