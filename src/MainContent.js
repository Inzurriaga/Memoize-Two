import React, { Component } from "react"
import HomePage from "./Homepage"
import TrainPage from "./TrainPage"

export default class MainContent extends Component{
    render(){
        return(
            <div>
                {
                    this.props.page === "home" ?
                  <HomePage users={this.props.users}
                            user={this.props.user}/> :
                            // i need to pass down a function to train for it to 
                  <TrainPage users={this.props.users}
                            user={this.props.user}
                            Questiontoggle={this.props.Questiontoggle}
                            toggleToQuestion={this.props.toggleToQuestion}
                            selectedQuestion={this.props.selectedQuestion}/>  
                }
            </div>
        )
    }
}