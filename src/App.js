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
        <p>zde kontejner s 9 dlazdicema na bubnovani</p>
        <PadsComponent />
      </div>
    );
  }
}

//Kontejner pro ovládácí prvky
class ControlsContainer extends React.Component {
  render() {
    return (
      <div id="controls-container">
        <p>zde kontejner ktery obsahuje ovladaci prvky</p>
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

//    ** KOMPONENTY <DrumPadsContainer> **
class PadsComponent extends React.Component {
  render() {
    return (
      <div id="drum-pads">
        <p>komponenta dlazdice 9x</p>
      </div>
    );
  }
}

//    ** KOMPONENTY <ControlsContainer> **

class PowerComponent extends React.Component {
  render() {
    return (
      <div id="power">
        <p>komponenta zapnuto/vypnuto</p>
      </div>
    );
  }
}

class DisplayComponent extends React.Component {
  render() {
    return (
      <div id="display-text">
        <p>komponenta pole s popisem co se prehrava za zvuk</p>
      </div>
    );
  }
}

class VolumeComponent extends React.Component {
  render() {
    return (
      <div id="volume">
        <p>komponenta nastaveni hlasitosti</p>
      </div>
    );
  }
}

class AudioTypeComponent extends React.Component {
  render() {
    return (
      <div id="audio-type">
        <p>komponenta 2 druhy zvuku</p>
      </div>
    );
  }
}

export default App;
