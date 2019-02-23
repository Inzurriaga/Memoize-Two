import React, { Component } from "react"
import HomePage from "./Homepage"
import TrainPage from "./TrainPage"

export default class MainContent extends Component{
    render(){
        return(
            <div>
                {
                    this.props.page === "home" ?
                  <HomePage /> :
                  <TrainPage />  
                }
            </div>
        )
    }
}