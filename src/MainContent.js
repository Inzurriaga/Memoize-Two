import React from "react"
import HomePage from "./Homepage"
import TrainPage from "./TrainPage"

export default function MainContent(props){
        return(
            <div>
                {
                    props.page === "home" ?
                  <HomePage users={props.users}
                            user={props.user}/> :
                  <TrainPage users={props.users}
                            user={props.user}
                            Questiontoggle={props.Questiontoggle}
                            toggleToQuestion={props.toggleToQuestion}
                            selectedQuestion={props.selectedQuestion}/>  
                }
            </div>
        )
}