import React, { Component } from "react"
import HomePage from "./Homepage"
import TrainPage from "./TrainPage"

export default class MainContent extends Component{
    render(){
        console.log("this is in the main", this.props.user)
        return(
            <div>
                {
                    this.props.page === "home" ?
                  <HomePage users={this.props.users}
                            user={this.props.user}/> :
                  <TrainPage />  
                }
            </div>
        )
    }
}