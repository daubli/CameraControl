# Camera Control   

Camera Control is able to control your Cisco/Tandberg cameras. You can set presets and move two cameras independently from each other. 

To control the first camera with your keyboard use the keys (German keyboard):
- w - UP
- s - DOWN
- a - LEFT
- d - RIGHT
- x - ZOOM OUT
- c - ZOOM IN

To control the second camera use the arrow keys. Use
- ü - ZOOM OUT
- \+  ZOOM IN

The presets are called with the number key of the respective preset. 
- eg. press 1 for preset 1

## Requirements  
- Install [https://nodejs.org/en/](Node.js)  
- Serial Port available
  
  
## Server  
  
Open your terminal and switch to the `server` directory. Run:
- `npm install`. 

Adjust the port name to the serial port the cameras are connected to. 
The portname can be adjusted in the file `conf.js`.

To start the server run:
 - `npm run start`

## Client

First start the server and ensure that the server can connect to your serial port. 
Then start the client by opening the `client/index.html` in a modern browser. 
