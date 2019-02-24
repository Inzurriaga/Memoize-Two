import React, { Component } from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class QuestionElement extends Component{
    constructor(){
        super();
        this.state = {
            userinput: ''
        }
    }


    render(){
        return(
            <div className="questionElement-section">
                <section className="instructions-section">
                    <h2>Instructions</h2>
                    <p>{this.props.instructions}</p>
                </section>
               <AceEditor 
               mode="javascript"
               theme="monokai"
               name="blah2"
               className="editor"
               onLoad={this.onLoad}
               onChange={this.onChange}
               fontSize={14}
               showPrintMargin={true}
               showGutter={true}
               highlightActiveLine={true}
               value={''}
               setOptions={{
               enableBasicAutocompletion: false,
               enableLiveAutocompletion: false,
               enableSnippets: false,
               showLineNumbers: true,
               tabSize: 2,
               }}
               />
               <div>
                   <p></p>
               </div>
            </div>
        )
    }
}