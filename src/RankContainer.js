import React from "react"

export default function RankContainer
(props){
    let sortUsers = props.users.sort((usera, userb) => {
        return userb.completed.length - usera.completed.length
      })
    return(
        <div className="rank-section">
            <h2>player rank</h2>
        <ul>
            {
              sortUsers.map((user, index) => {
                return (
                    <li>
                        <p>#{index + 1}</p>
                        <p> {user.name} </p>
                        <p>{user.completed.length} completed</p>
                    </li>
                )
              })
            }
        </ul>
        </div>
    )
}