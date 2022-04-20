import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./App.css";

//Logika aplikace
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clip: "",
      string: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(event) {
    //clickedSound = id elementu na kterém mám přichycený event listener (event.target.id by vracelo id konkretniho elementu na ktery jsem kliknul)
    let clickedSound = event.currentTarget.id;

    this.setState({
      clip: clickedSound,
      string: clickedSound,
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

  handleKeyPress(event) {
    //pressedKey = stisknutá klávesa
    let pressedKey = event.key;

    //podle toho, která se stiskne klávesa, se přehraje konkrétní zvuk
    switch (pressedKey) {
      case "q":
      case "Q":
        const drumPadQ = document.getElementById("delej");
        const drumPadQClip = document.getElementById("Q");
        drumPadQ.classList.add("pressed-key");
        drumPadQClip.play();
        this.setState({
          string: drumPadQ.id,
        });
        setTimeout(() => drumPadQ.classList.remove("pressed-key"), 3000);
        break;

      case "w":
      case "W":
        const drumPadW = document.getElementById("mam-to-v-pici");
        const drumPadWClip = document.getElementById("W");
        drumPadW.classList.add("pressed-key");
        drumPadWClip.play();
        this.setState({
          string: drumPadW.id,
        });
        setTimeout(() => drumPadW.classList.remove("pressed-key"), 2000);
        break;

      case "e":
      case "E":
        const drumPadE = document.getElementById("a-co-jako-vole");
        const drumPadEClip = document.getElementById("E");
        drumPadE.classList.add("pressed-key");
        drumPadEClip.play();
        this.setState({
          string: drumPadE.id,
        });
        setTimeout(() => drumPadE.classList.remove("pressed-key"), 1000);
        break;

      case "a":
      case "A":
        const drumPadA = document.getElementById("duranga-vole");
        const drumPadAClip = document.getElementById("A");
        drumPadA.classList.add("pressed-key");
        drumPadAClip.play();
        this.setState({
          string: drumPadA.id,
        });
        setTimeout(() => drumPadA.classList.remove("pressed-key"), 1000);
        break;

      case "s":
      case "S":
        const drumPadS = document.getElementById("rikas-mi-hezky");
        const drumPadSClip = document.getElementById("S");
        drumPadS.classList.add("pressed-key");
        drumPadSClip.play();
        this.setState({
          string: drumPadS.id,
        });
        setTimeout(() => drumPadS.classList.remove("pressed-key"), 2000);
        break;

      case "d":
      case "D":
        const drumPadD = document.getElementById("stranskej-vyprcanej");
        const drumPadDClip = document.getElementById("D");
        drumPadD.classList.add("pressed-key");
        drumPadDClip.play();
        this.setState({
          string: drumPadD.id,
        });
        setTimeout(() => drumPadD.classList.remove("pressed-key"), 2000);
        break;

      case "z":
      case "Z":
        const drumPadZ = document.getElementById("je-cas-klidu");
        const drumPadZClip = document.getElementById("Z");
        drumPadZ.classList.add("pressed-key");
        drumPadZClip.play();
        this.setState({
          string: drumPadZ.id,
        });
        setTimeout(() => drumPadZ.classList.remove("pressed-key"), 2000);
        break;

      case "x":
      case "X":
        const drumPadX = document.getElementById("curak-vydlazdenej");
        const drumPadXClip = document.getElementById("X");
        drumPadX.classList.add("pressed-key");
        drumPadXClip.play();
        this.setState({
          string: drumPadX.id,
        });
        setTimeout(() => drumPadX.classList.remove("pressed-key"), 3000);
        break;

      case "c":
      case "C":
        const drumPadC = document.getElementById("ser-na-to");
        const drumPadCClip = document.getElementById("C");
        drumPadC.classList.add("pressed-key");
        drumPadCClip.play();
        this.setState({
          string: drumPadC.id,
        });
        setTimeout(() => drumPadC.classList.remove("pressed-key"), 3000);
        break;
    }
  }

  render() {
    return (
      <DrumMachineContainer
        handleClick={this.handleClick}
        handleKeyPress={this.handleKeyPress}
        text={this.state.string}
      />
    );
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
        <DrumPadsContainer
          handleClick={this.props.handleClick}
          handleKeyPress={this.props.handleKeyPress}
        />
        <ControlsContainer text={this.props.text} />
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

    //event listener na stisk klávesy
    document.addEventListener("keydown", this.props.handleKeyPress);
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
        <DisplayComponent text={this.props.text} />
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
        <p>{this.props.text}</p>
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
