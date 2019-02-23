import React from "react"

export default function PlayerStatus(props){
    console.log(props.user)
    return(
        <div className="status-section">
            <h2>{props.user.name.toUpperCase()}</h2>
        </div>
    )
}