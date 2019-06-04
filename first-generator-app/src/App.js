import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Title from './components/Title'
import User from './components/User'

class App extends Component {

  state = {
    clickCount: 0,
    backColor: "yellow",
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    }
  }



  clickHandler = () => {
    const newCount = this.state.clickCount + 1;

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: 'grey'
      })
    } else {
      this.setState({
        clickCount: newCount,
        backColor: "yellow",
        userA: {
          firstName: "Jon",
          lastName: "Doe",
          avatarUrl:
            "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        },
        userB: {
          firstName: "Susanne",
          lastName: "Smith",
          avatarUrl:
            "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        }
      });
    }
  };


  render() {
    return (
      <div className="App" >

        <Header />
        <Title text="Lista de usuarios" />
        <p>El contador está a {this.state.clickCount}</p>

        <button onClick={this.clickHandler}>Aumentar contador</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          image={this.state.userB.avatarUrl}
        />

      </div>
    )

  }
}

export default App;
