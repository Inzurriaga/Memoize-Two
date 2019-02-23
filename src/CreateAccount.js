import React, { Component } from "react"

class Player{
    constructor(name, password, avatar, ){
        this.name = name;
        this.password = password;
        this.avatar = avatar;
        this.completed = []
    }
}

export default class CreateAccount extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            avatarList: ["halo", "deadspace", "fallout", "strom", "rebel", "vader"],
            avatar: ""
        }
    }

    username = e => {
        console.log("username", e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    
    password = e => {
        console.log("password", e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    avatar = e => {
        console.log(e.target.value)
    }

    login = () => {
        this.props.toggle()
    }

    createAccount = e => {
        e.preventDefault()
        // add descructuring here
        let player = new Player(this.state.username, this.state.password, this.state.avatar)
        this.props.createNewAccount(player)
    }


    render(){
        return(
            <form className="createaccount-section" onSubmit={this.createAccount}>
            <input type="button" onClick={this.login} value="login"></input>
                <h2>CREATE ACCOUNT</h2>
                <input onChange={this.username} type="text" placeholder="Username"></input>
                <input onChange={this.password}  type="password" placeholder="Password"></input>
                <h3>CHOOSE AVATAR</h3>
                {
                    this.state.avatarList.map((img, index) => {
                        return (
                            <label key={index}>
                                {img}
                                <input onChange={this.avatar} type="radio" name="avatar-icon" value={img}></input>
                            </label>
                        )
                    })
                }
                <input type="submit" value="Create"></input>
            </form>
        )
    }
}