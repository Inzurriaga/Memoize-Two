import React, { Component } from "react"
import questions from "./MockData"

export default class QuestionContainer extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    render(){
        return(
            <ul className="questionContainer-section">
                {
                    questions.map((questions) => {
                        return(
                            <li>{questions.title}</li>
                        )
                    })
                }
            </ul>
        )
    }
}