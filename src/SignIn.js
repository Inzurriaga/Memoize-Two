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

    createAccount = () => {
        this.props.toggle()
    }

    Login = () => {
        console.log("log in submit works")
    }

    render() {
        return(
            <form className="signin-section" onSubmit={this.login}>
            <input type="button" onClick={this.createAccount} value="create account"></input>
                <h2>LOGIN</h2>
                <input onChange={this.username} type="text" placeholder="Username"></input>
                <input onChange={this.password} type="password" placeholder="Password"></input>
                <input type="submit" value="Log In"></input>
            </form>
        )
    }
}