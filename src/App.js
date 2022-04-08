import React from "react";
import "./App.css";

//Logika aplikace
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clip: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    console.log(this);
    return <DrumMachineContainer handleClick={this.handleClick} />;
  }
}

//         *** KONTEJNERY ***
//Níže jsou jednotlivé kontejnery aplikace
//

//Main kontejner
class DrumMachineContainer extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <DrumPadsContainer handleClick={this.props.handleClick} />
        <ControlsContainer />
      </div>
    );
  }
}

//Kontejner s 9 "dlaždicemi" které vydávají zvuk
class DrumPadsContainer extends React.Component {
  componentDidMount() {
    const a = document.querySelectorAll(".drum-pad").forEach((item) => {
      item.addEventListener("click", this.props.handleClick);
    });
  }

  render() {
    return (
      <div id="drum-pads-container">
        <div className="drum-pad" id="delej">
          <span>Q</span>
          <audio
            src="https://www.jirikara.cz/delej.mp3"
            className="clip"
            id="Q"
          ></audio>
        </div>
        <div className="drum-pad" id="mam-to-v-pici">
          <span>W</span>
          <audio
            src="https://www.jirikara.cz/mamtovpici.mp3"
            className="clip"
            id="W"
          ></audio>
        </div>
        <div className="drum-pad" id="a-co-jako-vole">
          <span>E</span>
          <audio src="" className="clip" id="E"></audio>
        </div>
        <div className="drum-pad" id="duranga-vole">
          <span>A</span>
          <audio src="" className="clip" id="A"></audio>
        </div>
        <div className="drum-pad" id="rikas-mi-hezky">
          <span>S</span>
          <audio src="" className="clip" id="S"></audio>
        </div>
        <div className="drum-pad" id="stranskej-vyprcanej">
          <span>D</span>
          <audio src="" className="clip" id="D"></audio>
        </div>
        <div className="drum-pad" id="je-cas-klidu">
          <span>Z</span>
          <audio src="" className="clip" id="Z"></audio>
        </div>
        <div className="drum-pad" id="curak-vydlazdenej">
          <span>X</span>
          <audio src="" className="clip" id="X"></audio>
        </div>
        <div className="drum-pad" id="ser-na-to">
          <span>C</span>
          <audio src="" className="clip" id="C"></audio>
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
        <span className="off"></span>
        <span className="on"></span>
      </div>
    );
  }
}

class DisplayComponent extends React.Component {
  render() {
    return (
      <div id="display">
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
        <span className="off"></span>
        <span className="on"></span>
      </div>
    );
  }
}

export default App;
