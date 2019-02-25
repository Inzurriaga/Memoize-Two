import React, { Component } from "react"
import questions from "./MockData"

export default class QuestionContainer extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    questionSelected = (question) => {
        this.props.questionSelected(question)
    }

    render(){
        return(
            <ul className="questionContainer-section">
                {
                    questions.map((question) => {
                        return(
                            <li onClick={() => { this.questionSelected(question) }}
                                 key={question.id}>{question.title}</li>
                        )
                    })
                }
            </ul>
        )
    }
}