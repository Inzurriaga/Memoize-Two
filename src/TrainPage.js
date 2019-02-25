import React, { Component } from "react"
import Filter from "./Filter"
import QuestionContainer from "./QuestionContainer"
import QuestionElement from "./QuestionElement"

export default class TrainPage extends Component{
    constructor(){
        super();
        this.state = {
            toggle: false,
            selectedQuestion: {}
        }
    }

    questionSelected = (question) => {
        this.setState({
            toggle: true,
            selectedQuestion: question
        })
    }
    render(){
        return (
            <div>
                {
                    !this.state.toggle ?
                        <div>
                            <Filter />
                            <QuestionContainer questionSelected={this.questionSelected}/>
                        </div> :
                        <QuestionElement question={this.state.selectedQuestion} />
                }
            </div>
        )
    }
}