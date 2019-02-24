import React, { Component } from "react"
import questions from "./MockData"

export default class QuestionContainer extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    elementSelected = (question) => {
        this.props.QuestionSelected(question)
    }

    render(){
        return(
            <ul className="questionContainer-section">
                {
                    questions.map((question) => {
                        return(
                            <li onClick={() => {this.elementSelected(question)}} key={question.id}>{question.title}</li>
                        )
                    })
                }
            </ul>
        )
    }
}