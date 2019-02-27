import React, { Component} from "react"

export default class Header extends Component{
    togglePage = e => {
        this.props.togglePage(e.target.value)
    }

    signOut = () => {
        this.props.signOut()
    }

    render(){
        if(this.props.user !== undefined){
        return(
            <div className="header-section">
                    <h1>Javascript War</h1>
                    <nav>
                        <input className="page-button" onClick={this.togglePage} type="button" value="home"></input>
                        <input className="page-button" onClick={this.togglePage} type="button" value="train"></input>
                    </nav>
                    <input  onClick={this.signOut} className="signout-button" type="button" value="SIGN OUT"></input>
            </div>
        )
        }else{
            return(
                <div className="header-section">
                    <h1>Javascript War</h1>
                </div>
            ) 
        }
    }
}