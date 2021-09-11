import React from "react";
import "./App.css"

export default class App extends React.Component {
  state = {
    loading: true,
    info: null
  };

  async componentDidMount() {
    const url = "https://api.codedigger.tech/auth/profile/shivamsinghal1012/?format=json&platform=codeforces";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ info: data.result, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div class="loading-screen">
          <div class="loading-animation">
            <img src="https://imgur.com/FsvEuM2.png" alt="logo" class="logo" />
            <div class="loading-bar"></div>
          </div>
        </div>
      );
    }

    if (!this.state.info) {
      return <div>didn't get data</div>;
    }

    return (
      <div>
        <div>{this.state.info.name}</div>
        <div>{this.state.info.rating}</div>
        <div>{this.state.info.maxRating}</div>
      </div>
    );
  }
}