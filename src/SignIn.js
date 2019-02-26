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
        this.setState({
            username: e.target.value
        })
    }
    
    password = e => {
        this.setState({
            password: e.target.value
        })
    } 

    swtichToCreateAccount = () => {
        this.props.toggle()
    }

    login = e => {
        e.preventDefault()
        let user = this.props.users.find(user => {
            return user.name === this.state.username && user.password === this.state.password
        })
       if(typeof user === "object"){
           this.props.loginToAccount(user)
       }else{
            console.log("error message")
       }
    }

    render() {
        return(
            <form className="signin-section" onSubmit={this.login}>
            <input type="button" onClick={this.swtichToCreateAccount} value="create account"></input>
                <h2>LOGIN</h2>
                <input
                onChange={this.username} type="text" placeholder="Username"></input>
                <input onChange={this.password} type="password" placeholder="Password"></input>
                <input type="submit" value="Log In"></input>
            </form>
        )
    }
}