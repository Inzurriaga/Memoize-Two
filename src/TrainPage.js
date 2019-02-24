import React, { Component } from "react"
import Filter from "./Filter"
import QuestionContainer from "./QuestionContainer"
import QuestionElement from "./QuestionElement"

export default class TrainPage extends Component{
    constructor(){
        super();
        this.state = {
            toggle: false
        }
    }

    render(){
        return (
            <div>
                {
                    !this.state.toggle ?
                        <div>
                            <Filter />
                            <QuestionContainer />
                        </div> :
                        <QuestionElement />
                }
            </div>
        )
    }
}