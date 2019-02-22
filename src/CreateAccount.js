import React, { Component } from "react"

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
        console.log()
    }

    render(){
        return(
            <form className="createaccout-section">
                <input type="text"></input>
                <input type="password"></input>
                {
                    this.state.avatarList.map((img, index) => {
                        return (
                            <label key={index}>
                                <input type="radio" name="avatar-icon" value={img}></input>
                            </label>
                        )
                    })
                }
                <input type="submit"></input>
            </form>
        )
    }
}