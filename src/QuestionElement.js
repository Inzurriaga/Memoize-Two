import React, { Component } from "react";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class QuestionElement extends Component{
    constructor(){
        super();
        this.state = {
            userinput: "",
            userOutcome: "",
            rightAnswer: "",
            correct: ""
        }
    }

    componentDidMount(){
        this.setState({
            userinput: this.props.question.startup
        })
    }

    userinput = (code) => {
        this.setState({
            userinput: code
        })
    }

    userinputsubmit = () => {
        // let indexBeforeInvoke = this.state.userinput.indexOf("(")
        // let invokeString = this.state.userinput.substr(0, indexBeforeInvoke)
        // let functionName = invokeString.split(" ")[1]
        let outcome = eval(this.state.userinput)
        if(outcome === this.props.question.answer){
            this.setState({
                correct: "Correct",
                userOutcome: `expected ${this.props.question.answer}`,
                rightAnswer: `received ${outcome}`
            })
        }else{
            this.setState({
                correct: "Wrong",
                userOutcome: `expected ${this.props.question.answer}`,
                rightAnswer: `received ${outcome}`
            })
        }
    }

    render(){
        let borderColor;
        let textColor;
        if(this.state.correct === "Correct"){
            borderColor = {border: "2px solid green"}
            textColor = {color: "green"}
        }else if(this.state.correct === "Wrong"){
            borderColor = {border: "2px solid red"}
            textColor = {color: "red"}
        }else{
            borderColor= {border: "none"}
            textColor= {color: "none"}
        }
        return(
            <div className="questionElement-section">
                <section className="instructions">
                    <h2>Instructions</h2>
                    <p>{this.props.question.instructions}</p>
                    <div className="result" style={borderColor}>
                        <h2>RESULTS</h2>
                        <p style={textColor}>{this.state.correct}</p>
                        <p className="right-answer">{this.state.userOutcome}</p>
                        <p style={textColor}>{this.state.rightAnswer}</p>
                    </div>
                </section>
                <div>
               <AceEditor 
               mode="javascript"
               theme="monokai"
               name="blah2"
               className="editor"
               onLoad={this.onLoad}
               fontSize={14}
               showPrintMargin={true}
               showGutter={true}
               highlightActiveLine={true}
               value={this.state.userinput}
               onChange={this.userinput}
               setOptions={{
               showLineNumbers: true,
               tabSize: 2,
               }}
               />
               <div className="submit">
                  <input onClick={this.userinputsubmit} type="button" value="submit"></input>
               </div>
               </div>
            </div>
        )
    }
}