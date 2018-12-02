import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreCard from "./components/ScoreCard";
import friends from "./friends.json";
import "./App.css";
let clicked = [];

class App extends Component {
  state = {
    score: 0,
    friends: friends
  };

  handleClick = name => {
    let n = clicked.indexOf(name);
    console.log(name);

    console.log(n);

    if (n === -1) {
      clicked.push(name);
      console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
      this.shuffle();
    } else {
      console.log("duplicate");
      this.setState({ score: 0 });
      clicked = [];
      this.shuffle();
    }
  };

  shuffle = () => {
    console.log("shuffle");
    let counter = clicked.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;
      let temp = clicked[counter];
      clicked[counter] = clicked[index];
      clicked[index] = temp;
    }
    console.log(clicked);

    
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <ScoreCard
          id={this.state.score}
          value={this.state.score}
          score={this.state.score}
        />
        {this.state.friends.map(friend => (
          <Card
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
