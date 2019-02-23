import React, { Component } from 'react';
import Login from "./Login"
import Header from "./Header"
import MainContent from "./MainContent"

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      currentuser: undefined,
      page: "home"
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("player"))
    if(user !== null){
      console.log("there is players")
      this.setState({
        users: user
      })
    }else{
      console.log("there is no players")
    }
  }

  createNewAccount = (player) => {
    this.state.users.push(player);
    localStorage.setItem("player", JSON.stringify(this.state.users))
    this.setState({
      currentuser: player
    })
  }

  loginToAccount = (player) => {
    this.setState({
      currentuser: player
    })
  }

  togglePage = (page) => {
    this.setState({
      page: page
    })
  }


  render() {
    return (
      <div className="App">
        <Header togglePage={this.togglePage}
                user={this.state.currentuser}/>
        { !this.state.currentuser ? 
          <Login createNewAccount={this.createNewAccount} users={this.state.users} loginToAccount={this.loginToAccount}/> :
          <MainContent page={this.state.page}
                        user={this.state.currentuser}
                        users={this.state.users}/>
        }
      </div>
    );
  }
}

export default App;
