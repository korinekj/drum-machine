import React from "react";
import "./App.css";

//Logika aplikace
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <DrumMachineContainer />;
  }
}

//         *** KONTEJNERY ***
//Níže jsou jednotlivé kontejnery aplikace
//

//Main kontejner
class DrumMachineContainer extends React.Component {
  render() {
    return (
      <div id="drum-machine-container">
        <DrumPadsContainer />
        <ControlsContainer />
      </div>
    );
  }
}

//Kontejner s 9 "dlaždicemi" které vydávají zvuk
class DrumPadsContainer extends React.Component {
  render() {
    return (
      <div id="drum-pads-container">
        <div class="drum-pad" id="">
          Q
        </div>
        <div class="drum-pad" id="">
          W
        </div>
        <div class="drum-pad" id="">
          E
        </div>
        <div class="drum-pad" id="">
          A
        </div>
        <div class="drum-pad" id="">
          S
        </div>
        <div class="drum-pad" id="">
          D
        </div>
        <div class="drum-pad" id="">
          Z
        </div>
        <div class="drum-pad" id="">
          X
        </div>
        <div class="drum-pad" id="">
          C
        </div>
      </div>
    );
  }
}

//Kontejner pro ovládácí prvky
class ControlsContainer extends React.Component {
  render() {
    return (
      <div id="controls-container">
        <PowerComponent />
        <DisplayComponent />
        <VolumeComponent />
        <AudioTypeComponent />
      </div>
    );
  }
}

//         *** KOMPONENTY ***
//Níže jsou jednotlivé komponenty aplikace:
//

//    ** KOMPONENTY <ControlsContainer> **

class PowerComponent extends React.Component {
  render() {
    return (
      <div id="power">
        <p>Power</p>
        <span class="off"></span>
        <span class="on"></span>
      </div>
    );
  }
}

class DisplayComponent extends React.Component {
  render() {
    return (
      <div id="display-text">
        <p>display</p>
      </div>
    );
  }
}

class VolumeComponent extends React.Component {
  render() {
    return (
      <div id="volume">
        <input type="range" min="0" max="100" step="10"></input>
      </div>
    );
  }
}

class AudioTypeComponent extends React.Component {
  render() {
    return (
      <div id="audio-type">
        <p>Audio Type</p>
        <span class="off"></span>
        <span class="on"></span>
      </div>
    );
  }
}

export default App;
