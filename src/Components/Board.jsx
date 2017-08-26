import React, { Component } from "react";

import Player from "./Player.jsx";
import Mushroom from "./Mushroom.jsx";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalBlocks: 50,
      verticalBlocks: 30,
      blockWidth: 30,
      blockHeight: 30,
      mushrooms: []
    };

    const totalMushrooms = Math.round(
      (this.state.horizontalBlocks + this.state.verticalBlocks) / 2
    );

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < totalMushrooms; i++) {
      this.state.mushrooms.push({
        x: getRandom(0, this.state.horizontalBlocks-1),
        y: getRandom(0, this.state.verticalBlocks-1),
        remaining: true
      });
    }
  }

  render() {
    const styles = {
      width: this.state.horizontalBlocks * this.state.blockWidth + "px",
      height: this.state.verticalBlocks * this.state.blockHeight + "px",
      background: "white",
      border: "1px solid black"
    };

    return (
      <div>
        <h1>MARIO - Play</h1>
        <hr />
        <div style={styles}>
          <Player boardDetails={this.state} />
          {this.state.mushrooms
            .filter(mushroom => {
              return mushroom.remaining;
            })
            .map((mushroom, index) => {
              return (
                <Mushroom
                  key={index}
                  x={mushroom.x}
                  y={mushroom.y}
                  blockWidth={this.state.blockWidth}
                  blockHeight={this.state.blockHeight}
                />
              );
            })}
          <Mushroom x="12" y="24" blockWidth="30" blockHeight="30" />
        </div>
      </div>
    );
  }
}

export default Board;
