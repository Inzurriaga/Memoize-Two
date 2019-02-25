import React, { Component } from "react"

class Player{
    constructor(name, password, avatar, ){
        this.name = name;
        this.password = password;
        this.completed = []
    }
}

export default class CreateAccount extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    username = e => {
        this.setState({
            username: e.target.value
        })
    }
    
    password = e => {
        this.setState({
            password: e.target.value
        })
    }

    switchToLogin = () => {
        this.props.toggle()
    }

    createAccount = e => {
        e.preventDefault()
        // add descructuring here
        let player = new Player(this.state.username, this.state.password)
        this.props.createNewAccount(player)
    }


    render(){
        return(
            <form className="createaccount-section" onSubmit={this.createAccount}>
            <input type="button" onClick={this.switchToLogin} value="login"></input>
                <h2>CREATE ACCOUNT</h2>
                <input onChange={this.username} type="text" placeholder="Username"></input>
                <input onChange={this.password}  type="password" placeholder="Password"></input>
                <input type="submit" value="Create"></input>
            </form>
        )
    }
}