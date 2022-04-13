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

  handleClick(event) {
    //clickedSound = id elementu na kterém mám přichycený event listener (event.target.id by vracelo id konkretniho elementu na ktery jsem kliknul)
    let clickedSound = event.currentTarget.id;

    this.setState({
      clip: clickedSound,
    });

    //přehraje zvuk podle toho na kterou dlaždici klikneme
    switch (this.state.clip) {
      case "delej":
        document.getElementById("Q").play();
        break;
      case "mam-to-v-pici":
        document.getElementById("W").play();
        break;
      case "a-co-jako-vole":
        document.getElementById("E").play();
        break;
      case "duranga-vole":
        document.getElementById("A").play();
        break;
      case "rikas-mi-hezky":
        document.getElementById("S").play();
        break;
      case "stranskej-vyprcanej":
        document.getElementById("D").play();
        break;
      case "je-cas-klidu":
        document.getElementById("Z").play();
        break;
      case "curak-vydlazdenej":
        document.getElementById("X").play();
        break;
      case "ser-na-to":
        document.getElementById("C").play();
        break;
    }
  }

  render() {
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
    //přidán eventListener "click" na všechny dlaždice s class="drum-pad" --> po kliknutí se vyvolá funkce handleClick
    document.querySelectorAll(".drum-pad").forEach((item) => {
      console.log(item);
      item.addEventListener("click", this.props.handleClick);
    });
  }

  render() {
    return (
      <div id="drum-pads-container">
        <div className="drum-pad" id="delej">
          <audio
            src="https://www.jirikara.cz/delej.mp3"
            className="clip"
            id="Q"
          ></audio>
          <span>Q</span>
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
          <audio
            src="https://www.jirikara.cz/acojakovole.mp3"
            className="clip"
            id="E"
          ></audio>
        </div>
        <div className="drum-pad" id="duranga-vole">
          <span>A</span>
          <audio
            src="https://www.jirikara.cz/duranga-voe.mp3"
            className="clip"
            id="A"
          ></audio>
        </div>
        <div className="drum-pad" id="rikas-mi-hezky">
          <span>S</span>
          <audio
            src="https://www.jirikara.cz/rikas-mi-hezky.mp3"
            className="clip"
            id="S"
          ></audio>
        </div>
        <div className="drum-pad" id="stranskej-vyprcanej">
          <span>D</span>
          <audio
            src="https://www.jirikara.cz/stranskej.mp3"
            className="clip"
            id="D"
          ></audio>
        </div>
        <div className="drum-pad" id="je-cas-klidu">
          <span>Z</span>
          <audio
            src="https://www.jirikara.cz/cas_klidu.mp3"
            className="clip"
            id="Z"
          ></audio>
        </div>
        <div className="drum-pad" id="curak-vydlazdenej">
          <span>X</span>
          <audio
            src="https://www.jirikara.cz/curak_vydlazdenej.mp3"
            className="clip"
            id="X"
          ></audio>
        </div>
        <div className="drum-pad" id="ser-na-to">
          <span>C</span>
          <audio
            src="https://www.jirikara.cz/ser_na_to.mp3"
            className="clip"
            id="C"
          ></audio>
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
