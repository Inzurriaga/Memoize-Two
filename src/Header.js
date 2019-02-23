import React, { Component} from "react"

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    render(){
        return(
            <div className="header-section">
                <h1>Title here</h1>
            </div>
        )
    }
}