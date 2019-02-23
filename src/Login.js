import React, { Component } from "react"
import SignIn from "./SignIn"
import CreateAccount from "./CreateAccount"

export default class login extends Component{
    constructor(){
        super();
        this.state = {
            toggleLogin: "rotateY(0deg)"
        }
    }

    toggleLoginOption = () => {
        if( this.state.toggleLogin === "rotateY(0deg)"){
            this.setState({
                toggleLogin: "rotateY(180deg)"
            })
        }else{
            this.setState({
                toggleLogin: "rotateY(0deg)"
            })
        }
    }

    render() {
        return(
            <div className="login-section" style={{transform: this.state.toggleLogin }}>
               <SignIn toggle={this.toggleLoginOption}/>
               <CreateAccount toggle={this.toggleLoginOption}
                            createNewAccount={this.props.createNewAccount}/>
            </div>
        )
    }
}