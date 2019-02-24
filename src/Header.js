import React, { Component} from "react"
import halo from "./images/halo.png"
import deadspace from "./images/halo.png"
import fallout from "./images/halo.png"
import vader from "./images/halo.png"
import rebel from "./images/halo.png"
import storm from "./images/halo.png"

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            true: true
        }
    }

    togglePage = e => {
        this.props.togglePage(e.target.value)
    }
    render(){
        if(this.props.user !== undefined){
        return(
            <div className="header-section">
                    <h1>Title here</h1>
                    <nav>
                    <input onClick={this.togglePage} type="button" value="home"></input>
                    <input onClick={this.togglePage} type="button" value="train"></input>
                    </nav>
                    <img src={this.props.avatar}></img>
            </div>
        )
        }else{
            return(
                <div className="header-section">
                    <h1>Title here</h1>
                </div>
            ) 
        }
    }
}