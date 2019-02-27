import React from "react"
import QuestionContainer from "./QuestionContainer"
import QuestionElement from "./QuestionElement"

export default function TrainPage(props) {
    return (
        <div>
            {
                !props.Questiontoggle ?
                    <div>
                        <QuestionContainer
                            user={props.user}
                            toggleToQuestion={props.toggleToQuestion}/>
                    </div> :
                    <QuestionElement question={props.selectedQuestion}
                                    users={props.users}
                                    user={props.user} />
            }
        </div>
    )
}