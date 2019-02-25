import React, { Component } from "react"
import Filter from "./Filter"
import QuestionContainer from "./QuestionContainer"
import QuestionElement from "./QuestionElement"

export default class TrainPage extends Component{
    constructor(){
        super();
        this.state = {
            selectedProgress: "",
            selectedData: []
        }
    }

    submitFilter = (data, progress) => {
        this.setState({
            selectedData: data,
            selectedProgress: progress
        })
    }

    render(){
        return (
            <div>
                {
                    !this.props.Questiontoggle ?
                        <div>
                            <Filter submitFilter={this.submitFilter}/>
                            <QuestionContainer questionSelected={this.questionSelected}
                            selectedData={this.state.selectedData}
                            selectedProgress={this.state.selectedProgress}
                            user={this.props.user}
                            toggleToQuestion={this.props.toggleToQuestion}/>
                        </div> :
                        <QuestionElement question={this.props.selectedQuestion}
                                        users={this.props.users}
                                        user={this.props.user} />
                }
            </div>
        )
    }
}