import React, { Component } from "react"
import SignIn from "./SignIn"
import CreateAccount from "./CreateAccount"

export default class login extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
               <SignIn />
               <CreateAccount />
            </div>
        )
    }
}