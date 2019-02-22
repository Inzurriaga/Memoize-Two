import React, { Component } from "react"

export default class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
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

    Login = () => {
        console.log("log in submit works")
    }

    render() {
        return(
            <form className="signin-section" onSubmit={this.login}>
                <input onChange={this.username} type="text"></input>
                <input onChange={this.password} type="password"></input>
                <input type="submit" value="Log In"></input>
            </form>
        )
    }
}