import React from "react";
import PlayerStatus from "./PlayerStatus";
import RankContainer from "./RankContainer"

export default function HomePage(props) {
    return(
        <div>
            <PlayerStatus user={props.user}/>
            <RankContainer users={props.users}/>
        </div>
    )
}