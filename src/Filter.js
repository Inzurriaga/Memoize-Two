import React, { Component } from "react"

export default class Filter extends Component{
    constructor(){
        super();
        this.state = {
            Progress: "all",
            selectOption: []
        }
    }

    selectedProgress = e => {
        this.setState({
            Progress: e.target.value
        })
    }

    selectedDatatype = () => {
        let selectedData = []
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((type) => {
            selectedData.push(type.value)
          })
        this.setState({
            selectOption: selectedData
        })
    }

    render(){
        return(
            <form className="filter-section">
                <p>Progress</p>
                <select onChange={this.selectedProgress}>
                    <option value="all">all</option>
                    <option value="notCompleted">not Completed</option>
                    <option value="completed">Completed</option>
                </select>
                <p>Data Type</p>
                    <label>
                        array
                        <input onChange={this.selectedDatatype} type="checkbox" value="array"></input>
                    </label>
                    <label>
                        object
                        <input onChange={this.selectedDatatype} type="checkbox" value="object"></input>
                    </label>
                    <label>
                        number
                        <input onChange={this.selectedDatatype} type="checkbox" value="number"></input>
                    </label>
                    <label>
                        string
                        <input onChange={this.selectedDatatype} type="checkbox" value="string"></input>
                    </label>
                    <label>
                        <input type="submit"></input>
                    </label>
            </form>
        )
    }
}