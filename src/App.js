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
    hiscore: 0,
    friends: friends
  };

  componentDidMount = () => {
    this.shuffle();
  };

  handleClick = name => {
    let n = clicked.indexOf(name);

    if (n === -1 && this.state.score + 1 > this.state.hiscore) {
      clicked.push(name);
      console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
      this.setState({hiscore: this.state.score + 1});
      console.log(this.state.score);
      this.shuffle();
    } else if (n === -1) {
      clicked.push(name);
      console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
      console.log(this.state.score);

      this.shuffle();
    } else {
      this.setState({ score: 0 });
      clicked = [];
      this.shuffle();
    }
  };

 

  shuffle = () => {
    let counter = friends.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;
      let temp = friends[counter];
      friends[counter] = friends[index];
      friends[index] = temp;
    }

    console.log(this.state.score);
  };

  render() {
    if (this.state.score === 0) {
    }
    return (
      <Wrapper>
        <Title>Test Your Memory</Title>
        <ScoreCard
          id={this.state.score}
          value={this.state.score}
          score={this.state.score}
          hiscore={this.state.hiscore}
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
