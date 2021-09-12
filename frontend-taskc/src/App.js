import React from "react";
import "./App.css"
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

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
      return <div>Failed to fetch data</div>;
    }

    return (
      <div>
        <div class="card-container">
          <img
            class="round"
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            alt="user"
            width="200px"
          />
          <h3 class="card-info">{this.state.info.name}</h3>
          <h5 class="card-info">{this.state.info.organization.name}</h5>
          <h5 class="card-info">{this.state.info.country.name}</h5>
          <br/>
          <Button variant="contained" color="primary" href="#popup1">
          Contest Information
          </Button>
          <br/>
          <div id="popup1" class="overlay">
	          <div class="popup">
              <p class="card-info">Contest Information</p>
                <a class="close" href="#">&times;</a>
              <div class="card tilt-1">
                <h1> 1</h1>
                  <p class="card-info"><b>Contest Name:&nbsp;</b> {this.state.info.contestRank[0].contest.name}</p>
                  <p class="card-info"><b>World Rank:&nbsp;</b> {this.state.info.contestRank[0].worldRank}</p>
                  <p class="card-info"><b>Country Rank:&nbsp;</b> {this.state.info.contestRank[0].countryRank}</p>
                  <p class="card-info"><b>Organization Rank:&nbsp;</b> {this.state.info.contestRank[0].organizationRank}</p>
              </div>
              <div class="card tilt-2">
                <h1> 2</h1>
                  <p class="card-info"><b>Contest Name:&nbsp;</b> {this.state.info.contestRank[1].contest.name}</p>
                  <p class="card-info"><b>World Rank:&nbsp;</b> {this.state.info.contestRank[1].worldRank}</p>
                  <p class="card-info"><b>Country Rank:&nbsp;</b> {this.state.info.contestRank[1].countryRank}</p>
                  <p class="card-info"><b>Organization Rank:&nbsp;</b> {this.state.info.contestRank[1].organizationRank}</p>
              </div>
              <div class="card tilt-3">
                <h1> 3</h1>
                  <p class="card-info"><b>Contest Name:&nbsp;</b> {this.state.info.contestRank[2].contest.name}</p>
                  <p class="card-info"><b>World Rank:&nbsp;</b> {this.state.info.contestRank[2].worldRank}</p>
                  <p class="card-info"><b>Country Rank:&nbsp;</b> {this.state.info.contestRank[2].countryRank}</p>
                  <p class="card-info"><b>Organization Rank:&nbsp;</b> {this.state.info.contestRank[2].organizationRank}</p>
              </div>
	        </div>
        </div>

        <br/><br/>
        <div>
        <Button variant="contained" color="primary" href="#popup2">
          My Information
          </Button>
          <div id="popup2" class="overlay">
	          <div class="popup2">
              <p class="card-info"><b>My Information</b></p>
              <br/>
		          <a class="close" href="#">&times;</a>
		          <div class="content">
                <p class="card-info"><b>Rating:&nbsp;</b>{this.state.info.rating}</p>
                <p class="card-info"><b>Max Rating:&nbsp;</b>{this.state.info.maxRating}</p>
                <p class="card-info"><b>Rank:&nbsp;</b>{this.state.info.rank}</p>
                <p class="card-info"><b>Max Rank:&nbsp;</b>{this.state.info.maxRank}</p>
                <p class="card-info"><b>World Rank:&nbsp;</b>{this.state.info.worldRank}</p>
                <p class="card-info"><b>Country Rank:&nbsp;</b>{this.state.info.countryRank}</p>
                <p class="card-info"><b>Organization Rank:&nbsp;</b>{this.state.info.organizationRank}</p>
		          </div>
	          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}