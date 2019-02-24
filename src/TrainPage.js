import React, { Component } from "react"
import Filter from "./Filter"
import QuestionContainer from "./QuestionContainer"
import QuestionElement from "./QuestionElement"

export default class TrainPage extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <Filter />
                <QuestionContainer />
                <QuestionElement />
            </div>
        )
    }
}