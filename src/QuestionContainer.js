import React, { Component } from "react"
import questions from "./MockData"

export default class QuestionContainer extends Component{
    questionSelected = (question) => {
        this.props.toggleToQuestion(question)
    }
    render(){
        return(
            <ul className="questionContainer-section">
                {
                    questions.map((question) => {
                        if(this.props.user.completed.includes(question.id)){
                            return(
                                <li className="user-completed" onClick={() => { this.questionSelected(question) }}
                                     key={question.id}>{question.title}</li>
                            )     
                        }else{
                            return(
                                <li className="user-notCompleted" onClick={() => { this.questionSelected(question) }}
                                     key={question.id}>{question.title}</li>
                            )
                        }
        
                    })
                }
            </ul>
        )
    }
}