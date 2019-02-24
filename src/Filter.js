import React, { Component } from "react"

export default class Filter extends Component{
    constructor(){
        super();
        this.state = {
            true: true,
            selectOption: ""
        }
    }

    render(){
        return(
            <form className="filter-section">
                <p>Progress</p>
                <select>
                    <option>all</option>
                    <option>not Completed</option>
                    <option>Completed</option>
                </select>
                <p>Data Type</p>
                    <input type="checkbox" value="array"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="submit"></input>
            </form>
        )
    }
}